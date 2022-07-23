import baseIpRequest from '../../ServerDev';
export const BUY_CART = "BUY_CART";
export const GET_TOP_5_SALES = "GET_TOP_5_SALES";
export const GET_TOP_5_UNIQUE_SALES = "GET_TOP_5_UNIQUE_SALES";
export const GET_5_DAYS_PAST = "GET_5_DAYS_PAST";





export const buyCartDispatch = data => {
    return dispatch => {
        dispatch({type: BUY_CART, data});
    }

} 


export const buyCartAction = () =>{   
    return async dispatch => {        
        const response = await fetch(baseIpRequest.serverAddress + '/sales/buyCart', {
            method:'POST',
            headers:{
                'Content-type': 'application/json',
                
            }            
        })
        const data = await response.json(); 
        if(data.status){
            dispatch(buyCartDispatch(data));
            return true;
        } else {
            throw new Error('Something went wrong');
        }
    }
}


export const getTop5SalesDispatch = data => {
    return dispatch => {
        dispatch({type: GET_TOP_5_SALES, data});
    }

} 


export const getTop5SalesAction = () =>{   
    return async dispatch => {        
        const response = await fetch(baseIpRequest.serverAddress + '/products/top5products', {
            method:'GET',
            headers:{
                'Content-type': 'application/json',
            }            
        })
        const data = await response.json(); 
        if(data.status){
            dispatch(getTop5SalesDispatch(data));
            return true;
        } else {
            throw new Error('Something went wrong');
        }
    }
}


export const getTop5UniqueSalesDispatch = data => {
    return dispatch => {
        dispatch({type: GET_TOP_5_UNIQUE_SALES, data});
    }

} 


export const getTop5UniqueSalesAction = () =>{   
    return async dispatch => {        
        const response = await fetch(baseIpRequest.serverAddress + '/sales/top5UniqueSoldProducts', {
            method:'GET',
            headers:{
                'Content-type': 'application/json',
            }            
        })
        const data = await response.json(); 
        if(data.status){
            dispatch(getTop5UniqueSalesDispatch(data));
            return true;
        } else {
            throw new Error('Something went wrong');
        }
    }
}


export const get5DaysPastDispatch = data => {
    return dispatch => {
        dispatch({type: GET_5_DAYS_PAST, data});
    }

} 


export const get5DasyPastAction = () =>{   
    return async dispatch => {        
        const response = await fetch(baseIpRequest.serverAddress + '/sales/5lastdaysSales', {
            method:'GET',
            headers:{
                'Content-type': 'application/json',
            }            
        })
        const data = await response.json(); 
        if(data.status){
            dispatch(get5DaysPastDispatch(data));
            return true;
        } else {
            throw new Error('Something went wrong');
        }
    }
}
