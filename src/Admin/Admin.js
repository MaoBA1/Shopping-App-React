import React, { useState, useEffect } from 'react';
import './style/style.css';
import { Scrollbars } from 'react-custom-scrollbars';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from '../store/actions/productsActions';

import ProductItem from './AdminComponents/productItem';
import ModalAdd from './AdminComponents/ModalAdd';
import ModalEddit from './AdminComponents/ModalEdit';
import ModalDelete from './AdminComponents/ModalDelete';


function Admin() {
  const dispatch = useDispatch();
  const productsSelector = useSelector(state => state.ProductsReducer);
  const [isVisibleAdd, setIsVisibleAdd] = useState(false);
  const [isVisibleEddit, setIsVisibleEddit] = useState(false);
  const [isVisibleDelete, setIsVisibleDelete] = useState(false);
  const [modalEdditParams, setModalEdditParams] = useState(null);
  const [modalDeleteParams, setModalDeleteParams] = useState(null);

  const getAllProducts = async() => {
    let action = getAllProductsAction();
    try{
        await dispatch(action);
    } catch(error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  },[getAllProducts])
  
  const openMoadlEddit = params => {
    setModalEdditParams(params);
    setIsVisibleEddit(true);
  }
  const openMoadlDelete = params => {
    setModalDeleteParams(params);
    setIsVisibleDelete(true);
  }
    

  return (
    <div className="Admin">
      <Scrollbars  style={{width: '100%', height: '85%'}}>
        <div className="upper-button-Div">
            <button onClick={() => setIsVisibleAdd(true)} className="add-Button">
                <h4>Add New Product</h4>
            </button>
        </div>
        { productsSelector && productsSelector?.ProductsReducer?.map(item => <ProductItem key={item._id} item={item} openModalEddit={openMoadlEddit}  openMoadlDelete={openMoadlDelete}/>)}
        {isVisibleAdd && <ModalAdd  closeModal={setIsVisibleAdd}/>}
        {isVisibleEddit && <ModalEddit  closeModal={setIsVisibleEddit} params={modalEdditParams}/>}
        {isVisibleDelete && <ModalDelete  closeModal={setIsVisibleDelete} params={modalDeleteParams}/>}
      </Scrollbars>
    </div>
    
  );
}

export default Admin;
