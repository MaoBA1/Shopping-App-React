import React, { useEffect } from "react";
import '../style/style.css';
import * as GrForm from 'react-icons/gr';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCartProducts, getCartTotalPay, getAllProducts } from '../../ApiCalls';
import { buyCartAction } from '../../store/actions/salessActions';

import CartProductItem from './CartProductItem';

const Cart = props => {
    const dispatch = useDispatch();
    const cartProductsSelector = useSelector(state => state.CartProductReducer);
    const cartTotalPaySelector = useSelector(state => state.CartTotalReducer);
    const cartProducts = cartProductsSelector?.CartProductReducer;
    const total = cartTotalPaySelector?.CartTotalReducer;

    const buyCart = async() => {
        let action = buyCartAction();
        try{
            await dispatch(action)
            .then(result => {
                if(result) {
                    getAllProducts(dispatch);
                    getAllCartProducts(dispatch);
                    getCartTotalPay(dispatch);
                    alert('Your purchase has been made successfully')
                }
            })
        } catch(error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        getAllCartProducts(dispatch);
        getCartTotalPay(dispatch);
    },[dispatch])
    
    
    
    
    return(
        <nav className='cart-container-active'>
           
            <button onClick={() => props.closeCart(false)} className='cart-close-button'>
                <GrForm.GrFormClose size={20}/>
            </button>
           
            <Scrollbars style={{marginTop:10, height:'80%', marginBottom:20}}>
                <div className='cart-title-container'>
                    <h2>Your Cart</h2>
                </div>

                 {
                    cartProducts && cartProducts?.length > 0
                    && cartProducts?.map(item => <CartProductItem  key={item._id} item={item}/>)
                 } 

                 {
                    (!cartProducts || cartProducts?.length === 0)
                    && (
                        <div className='cart-is-empty-container'>
                            <h3>Your Cart is Empty</h3>
                        </div>
                    )
                 }  
                 <div>
                    <h3 className='total-pay'>TOTAL PRICE: {total} $</h3>
                </div>

                <div>
                    {
                        !cartProducts || cartProducts?.length === 0?
                        (
                            
                            <button className="buy-Button-fade">
                                <h3>PAY</h3>
                            </button>
                        )
                        :
                        (
                            <button onClick={buyCart} className="buy-Button">
                                <h3>PAY</h3>
                            </button>
                        )
                    }
                </div>
                
            </Scrollbars>
            
        </nav>
    )
}

export default Cart;