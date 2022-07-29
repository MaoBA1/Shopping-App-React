import './style/style.css';
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { getTop5Sales, getTop5UniqueSales, getSallesFrom5PastDays } from '../ApiCalls';

import Top5Item from './StatsComponents/Top5Item';
import Top5UniqueItem from './StatsComponents/Top5UniqueItem';
import Past5Item from './StatsComponents/Past5Item'

function Stats(props) {
    const dispatch = useDispatch();
    const SaleSelector = useSelector(state => state.Top5SalesReducer);

    useEffect(() => {
        getTop5Sales(dispatch);
        getTop5UniqueSales(dispatch);
        getSallesFrom5PastDays(dispatch);
    },[dispatch]);


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