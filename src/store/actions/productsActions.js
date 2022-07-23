import baseIpRequest from '../../ServerDev';
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
export const EDDIT_PRODUCT = "EDDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const GET_ALL_PRODUCTS_CART = "GET_ALL_PRODUCTS_CART";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";
export const GET_TOTAL_PAY_FROM_CURRENT_CART = "GET_TOTAL_PAY_FROM_CURRENT_CART";





export const getAllProductsDispatch = data => {
    return dispatch => {
        dispatch({type: GET_ALL_PRODUCTS, data});
    }

} 


export const getAllProductsAction = () =>{   
    return async dispatch => {        
        const response = await fetch(baseIpRequest.serverAddress + '/products/getAllProducts', {
            method:'GET',
            headers:{
                'Content-type': 'application/json',
                
            }            
        })
        const data = await response.json(); 
        if(data){
            dispatch(getAllProductsDispatch(data));
        } else {
            throw new Error('Something went wrong');
        }
    }
}


export const addNewProductDispatch = data => {
    return dispatch => {
        dispatch({type: ADD_NEW_PRODUCT, data});
    }

} 


export const addNewProductAction = (product) =>{   
    return async dispatch => {        
        const response = await fetch(baseIpRequest.serverAddress + '/products/addNewProduct', {
            method:'POST',
            headers:{
                'Content-type': 'application/json',
                
            }, 
            body:JSON.stringify(product)           
        })
        const data = await response.json(); 
        if(data.status){
            dispatch(addNewProductDispatch(data));
            return true;
        } else {
            throw new Error('Something went wrong');
        }        
    }
}

export const edditProductDispatch = data => {
    return dispatch => {
        dispatch({type: EDDIT_PRODUCT, data});
    }

} 


export const edditProductAction = (product, productId) =>{   
    return async dispatch => {        
        const response = await fetch(baseIpRequest.serverAddress + '/products/edditProduct/' + productId, {
            method:'PUT',
            headers:{
                'Content-type': 'application/json',
                
            }, 
            body:JSON.stringify(product)           
        })
        const data = await response.json(); 
        if(data.status){
            dispatch(edditProductDispatch(data));
            return true;
        } else {
            throw new Error('Something went wrong');
            
        }        
    }
}

export const deleteProductDispatch = data => {
    return dispatch => {
        dispatch({type: DELETE_PRODUCT, data});
    }

} 


export const deleteProductAction = (productId) =>{   
    return async dispatch => {        
        const response = await fetch(baseIpRequest.serverAddress + '/products/deleteProduct/' + productId, {
            method:'DELETE',
            headers:{
                'Content-type': 'application/json',
                
            }
        })
        const data = await response.json(); 
        if(data.status){
            dispatch(deleteProductDispatch(data));
            return true;
        } else {
            throw new Error('Something went wrong');
            
        }        
    }
}

export const addProductToCartDispatch = data => {
    return dispatch => {
        dispatch({type: ADD_PRODUCT_TO_CART, data});
    }

} 


export const addProductToCartAction = (productId) =>{   
    return async dispatch => {        
        const response = await fetch(baseIpRequest.serverAddress + '/products/addProductToCart/' + productId, {
            method:'PUT',
            headers:{
                'Content-type': 'application/json',
                
            }
        })
        const data = await response.json(); 
        if(data.status){
            dispatch(addProductToCartDispatch(data));
            return true;
        } else {
            throw new Error('Something went wrong');
            
        }        
    }
}

export const getAllCartProductsDispatch = data => {
    return dispatch => {
        dispatch({type: GET_ALL_PRODUCTS_CART, data});
    }

} 


export const getAllCartProductsAction = () =>{   
    return async dispatch => {        
        const response = await fetch(baseIpRequest.serverAddress + '/products/getAllCartProducts/', {
            method:'GET'
        })
        const data = await response.json(); 
        
        if(data.status){
            dispatch(getAllCartProductsDispatch(data));
            return true;
        } else {
            throw new Error('Something went wrong');
        }        
    }
}

export const deleteProductFromCartDispatch = data => {
    return dispatch => {
        dispatch({type: DELETE_PRODUCT_FROM_CART, data});
    }

} 


export const deleteProductFromCartAction = (productId) =>{   
    return async dispatch => {        
        const response = await fetch(baseIpRequest.serverAddress + '/products/deleteItemFromCart/' + productId, {
            method:'PUT'
        })
        const data = await response.json(); 
        
        if(data.status){
            dispatch(deleteProductFromCartDispatch(data));
            return true;
        } else {
            throw new Error('Something went wrong');
        }        
    }
}


export const getTotalPayFromCurrentCartDispatch = data => {
    return dispatch => {
        dispatch({type: GET_TOTAL_PAY_FROM_CURRENT_CART, data});
    }

} 


export const getTotalPayFromCurrentCartAction = () =>{   
    return async dispatch => {        
        const response = await fetch(baseIpRequest.serverAddress + '/products/getTotalPrice/', {
            method:'GET'
        })
        const data = await response.json(); 
        if(data.status){
            dispatch(getTotalPayFromCurrentCartDispatch(data));
            return true;
        } else {
            throw new Error('Something went wrong');
        }        
    }
}