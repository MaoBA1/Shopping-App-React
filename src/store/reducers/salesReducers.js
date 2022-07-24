import { GET_TOP_5_SALES, GET_TOP_5_UNIQUE_SALES, GET_5_DAYS_PAST } from '../actions/salessActions';

const initialState = {
    Top5SalesReducer:null,
    Top5UniqueSalesReducer:null,
    SalesFrom5DaysReducer: null,
};

 // eslint-disable-next-line
export default (state = initialState, action) => {       
    switch (action.type){
        case GET_TOP_5_SALES:
            return {
                ...state,       
                Top5SalesReducer: action.data.top5
            }
        case GET_TOP_5_UNIQUE_SALES:
            return {
                ...state,       
                Top5UniqueSalesReducer: action.data.UniqueProducts
            }
        case GET_5_DAYS_PAST:
            return {
                ...state,       
                SalesFrom5DaysReducer: action.data.sales
            }
        default:
            return state;
    }
}