import '../style/style.css';
import { useDispatch } from 'react-redux';
import { deleteProductFromCartAction } from '../../store/actions/productsActions';


const CartProductItem = props => {
    const dispatch = useDispatch();
    const deleteProductFromCart = async() => {
        let action = deleteProductFromCartAction(props.item._id);
        try{
            await dispatch(action)
            .then(result => {
                if(result) {
                    alert(`${props.item.productName} was deleted from your cart successfully!`);
                }
            })
        } catch(error) {
            alert(error.message);
        }
    }
    return(
        <div className="cart-product-item-container">
            <ul className="list-style">
                <li className="list-item-style">
                    <p className="list-item-text">{props.item.productName}</p>
                </li>

                <li className="list-item-style">
                    <p className="list-item-text">{props.item.price} $</p>
                </li>

                <li className="list-item-style">
                    <img
                        src={props.item.productImage}
                        className="cart-item-img"
                        alt='Item'
                    />
                </li>

                <li className="list-item-style">
                    <p className="list-item-text">{props.item.countInCart} {props.item.countInCart === 1? 'Unit' : 'Units'}</p>
                </li>

                <li className="list-item-style">
                    <button onClick={deleteProductFromCart} className="delete-from-cart-Button">
                        <p>{props.item.countInCart === 1 ? 'Delete From Cart' : '-'}</p>
                    </button>
                </li>

            </ul>
        </div>
    )
}

export default CartProductItem;