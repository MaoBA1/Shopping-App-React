import './style/style.css';
import React, { useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTop5SalesAction, getTop5UniqueSalesAction, get5DasyPastAction } from '../store/actions/salessActions';
import { Scrollbars } from 'react-custom-scrollbars';

import Top5Item from './StatsComponents/Top5Item';
import Top5UniqueItem from './StatsComponents/Top5UniqueItem';
import Past5Item from './StatsComponents/Past5Item'

function Stats(props) {
    const dispatch = useDispatch();
    const SaleSelector = useSelector(state => state.Top5SalesReducer);
    
    const getTop5Sales = useCallback(async() => {
        let action = getTop5SalesAction();
        try {
            await dispatch(action);
        } catch (error) {
            console.log(error.message);
        }
    },[dispatch]);

    const getTop5UniqueSales = useCallback(async() => {
        let action = getTop5UniqueSalesAction();
        try {
            await dispatch(action);
        } catch (error) {
            console.log(error.message);
        }
    },[dispatch]);

    const getSallesFrom5PastDays = useCallback(async() => {
        let action = get5DasyPastAction();
        try {
            await dispatch(action);
        } catch (error) {
            console.log(error.message);
        }
    },[dispatch]);

    useEffect(() => {
        getTop5Sales();
        getTop5UniqueSales();
        getSallesFrom5PastDays();
    },[getTop5Sales,getTop5UniqueSales, getSallesFrom5PastDays]);


    return(
        <div className="Stats">
            <div className="stateItem">
                <div>
                    <h1>Top 5 sales</h1>
                </div>
                <div className="block-container">
                <Scrollbars style={{height:'90%'}}>
                    
                    {SaleSelector?.Top5SalesReducer && SaleSelector?.Top5SalesReducer.map(item => <Top5Item key={item._id} item={item}/>) }
                </Scrollbars>
                </div>
                
            </div>

            <div className="stateItem">
                <div>
                    <h1>Top 5 Unique sales</h1>
                </div>
                <div className="block-container">
                <Scrollbars style={{height:'90%'}}>
                    
                    {SaleSelector?.Top5UniqueSalesReducer && SaleSelector?.Top5UniqueSalesReducer.map(item => <Top5UniqueItem key={item._id} item={item}/>) }
                </Scrollbars>
                </div>
                
            </div>

            <div className="stateItem">
                <div>
                    <h1>Sales from 5 past days</h1>
                </div>
                <div className="block-container">
                <Scrollbars style={{height:'90%'}}>
                    
                    {SaleSelector?.SalesFrom5DaysReducer && SaleSelector?.SalesFrom5DaysReducer.sort((a, b) => (new Date(b.date) - new Date(a.date))).map(item => <Past5Item key={item._id} item={item}/>) }
                </Scrollbars>
                </div>
                
            </div>
        </div>
    )
}


export default Stats;