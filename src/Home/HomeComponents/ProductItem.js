import '../style/style.css';
import * as FaIcons from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { getAllProducts, getAllCartProducts, getCartTotalPay } from '../../ApiCalls';
import { addProductToCartAction } from '../../store/actions/productsActions'; 



const ProductItem = props => {
    const dispatch = useDispatch();

    const addProductToCart = async() => {
        let action = addProductToCartAction(props.item._id);
        try{
            await dispatch(action)
            .then(result => {
                if(result) {
                    getAllProducts(dispatch);
                    getAllCartProducts(dispatch);
                    getCartTotalPay(dispatch);
                    alert(`${props.item.productName} was added to your cart successfully`);
                    
                }
            })
        } catch(error) {
            alert(error.message);
        }
    }
    
    
    
    
    
    return(
        <div className="item-container">
            <div className="item-uper-container">
                <div>
                    <img
                        src={props.item.productImage}
                        className="img"
                        alt='item'
                    />
                </div>
                <h2>{props.item.productName.length < 30 ? props.item.productName : props.item.productName.substring(0, 30) + ' .......'}</h2>
            </div>
            <div className="desc-container">
                <h3>{props.item.description.length < 100 ? props.item.description : props.item.description.substring(0, 100) + ' .......'}</h3>
            </div>
            <div className="bottom-item-container">
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
            
        </div>
    )
}

export default ProductItem;