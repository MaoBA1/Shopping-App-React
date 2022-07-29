import {
     getAllProductsAction,
     getAllCartProductsAction,
     getTotalPayFromCurrentCartAction
} from './store/actions/productsActions';
import {
    getTop5SalesAction,
    getTop5UniqueSalesAction,
    get5DasyPastAction
} from './store/actions/salessActions';



export const getAllProducts = async(dispatch) => {
    let action = getAllProductsAction();
    try{
        await dispatch(action);
    } catch(error) {
        console.log(error);
    }
  };

export const getAllCartProducts = async(dispatch) => {
    let action = getAllCartProductsAction();
    try{
        await dispatch(action);
    } catch(error) {
        console.log(error.message);
    }
};

export const getCartTotalPay = async(dispatch) => {
    let action = getTotalPayFromCurrentCartAction();
    try{
        await dispatch(action);
    } catch(error) {
        console.log(error.message);
    }
};



export const getTop5Sales = async(dispatch) => {
    let action = getTop5SalesAction();
    try {
        await dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
};

export const getTop5UniqueSales = async(dispatch) => {
    let action = getTop5UniqueSalesAction();
    try {
        await dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
};

export const getSallesFrom5PastDays = async(dispatch) => {
    let action = get5DasyPastAction();
    try {
        await dispatch(action);
    } catch (error) {
        console.log(error.message);
    }
};


  