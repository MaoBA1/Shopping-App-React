import React, { useState, useEffect } from 'react';
import './style/style.css';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../ApiCalls';
import * as FaIcons from 'react-icons/io';


import ProductItem from './HomeComponents/ProductItem';
import Cart from './HomeComponents/Cart';

const Row = (props) => {
  return (
    <div className="row-of-items">
        {props?.item?.map(item => <ProductItem  key={item._id} item={item}/>)}
    </div>
  )
}

function Home() {
  const dispatch = useDispatch();
  const productsSelector = useSelector(state => state.ProductsReducer);
  const [isVisibale, setIsVisibale] = useState(false);

  
  useEffect(() => {
    getAllProducts(dispatch);
  },[dispatch]);

  const sliceIntoChunks = (arr) => {
    const res = [];
    let id = 0;
    for (let i = 0; i < arr?.length; i += 4) {
        const chunk = arr.slice(i, i + 4);
        res.push({id:id, chunk:chunk});
        id++;
    }
    return res;
  }

  return (
    
      <div className="Home">
        {isVisibale && <Cart closeCart={setIsVisibale}/>}
          <button className="upper-Div">
            <FaIcons.IoMdCart color="#fff"  onClick={() => setIsVisibale(true)} size={50}/>
          </button>
          <Scrollbars style={{width: '100%', height: '82%', marginTop: 30}}>
              { productsSelector && sliceIntoChunks(productsSelector?.ProductsReducer?.sort((a, b) => (new Date(b.creatAdt) - new Date(a.creatAdt)))).map(item => <Row key={item.id} item={item.chunk}/>)}
          </Scrollbars>
      </div>
    
    
  );
}

export default Home;


