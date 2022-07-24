import { GET_ALL_PRODUCTS, GET_ALL_PRODUCTS_CART, GET_TOTAL_PAY_FROM_CURRENT_CART } from '../actions/productsActions';

const initialState = {
    ProductsReducer:null,
    CartProductReducer:null,
    CartTotalReducer:null,
};

 // eslint-disable-next-line
export default (state = initialState, action) => {       
    switch (action.type){
        case GET_ALL_PRODUCTS:
            return {
                ...state,       
                ProductsReducer: action.data.Products
            }
        case GET_ALL_PRODUCTS_CART:
                return {
                    ...state, 
                    CartProductReducer: action.data.CartProducts
                }
        case GET_TOTAL_PAY_FROM_CURRENT_CART:
                return {
                    ...state, 
                    CartTotalReducer: action.data.total
                }
        default:
            return state;
    }
}