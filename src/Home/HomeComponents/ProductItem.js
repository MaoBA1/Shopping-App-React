import '../style/style.css';
import * as FaIcons from 'react-icons/ai';
import { addProductToCartAction } from '../../store/actions/productsActions'
import { useDispatch } from 'react-redux';



const ProductItem = props => {
    const dispatch = useDispatch();
    
    
    const addProductToCart = async() => {
        let action = addProductToCartAction(props.item._id);
        try{
            await dispatch(action)
            .then(result => {
                if(result) {
                    alert(`${props.item.productName} was added to your cart successfully`);
                }
            })
        } catch(error) {
            alert(error.message);
        }
    }
    return(
        <div className="item-container">
            <div>
                <img
                    src={props.item.productImage}
                    className="img"
                    alt='item'
                />
            </div>
            <h1>{props.item.productName}</h1>
            <div className="desc-container">
                <h3>{props.item.description}</h3>
            </div>
            <h3>{props.item.price} $</h3>
            {
                !props.item.isInCart?
                (
                    <button onClick={addProductToCart} className="buy-Button">
                        <h3>BUY</h3>
                    </button>
                )
                :
                (
                    <div className="product-in-cart-status-container">
                        <div className="product-in-cart-status">
                            <FaIcons.AiFillLike style={{marginRight:10}} size={25}/>
                            <h3>The Product is your cart!</h3>                        
                        </div>
                        <button onClick={addProductToCart} className="product-in-cart-status-pluse">
                            <h4>+</h4>
                        </button>
                    </div>
                )
            }
            
        </div>
    )
}

export default ProductItem;