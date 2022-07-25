import React, { useState, useEffect, useCallback } from 'react';
import './style/style.css';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from '../store/actions/productsActions';
import * as FaIcons from 'react-icons/io';


import ProductItem from './HomeComponents/ProductItem';
import Cart from './HomeComponents/Cart';

function Home() {
  const dispatch = useDispatch();
  const productsSelector = useSelector(state => state.ProductsReducer);
  const [isVisibale, setIsVisibale] = useState(false);

  const getAllProducts = useCallback(async() => {
    let action = getAllProductsAction();
    try{
        await dispatch(action);
    } catch(error) {
        console.log(error);
    }
  },[dispatch])

  useEffect(() => {
    getAllProducts();
  },[getAllProducts,productsSelector])


  return (
    
      <div className="Home">
        {isVisibale && <Cart closeCart={setIsVisibale}/>}
          <button className="upper-Div">
            <FaIcons.IoMdCart  onClick={() => setIsVisibale(true)} size={50}/>
          </button>
          <Scrollbars style={{width: '100%', height: '85%', marginTop: 30}}>
            { productsSelector && productsSelector?.ProductsReducer?.sort((a, b) => (new Date(b.creatAdt) - new Date(a.creatAdt))).map(item => <ProductItem  key={item._id} item={item}/>)}
          </Scrollbars>
      </div>
    
    
  );
}

export default Home;
