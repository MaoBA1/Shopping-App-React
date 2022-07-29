import '../style/style.css';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNewProductAction } from '../../store/actions/productsActions';
import { getAllProducts } from '../../ApiCalls';



function ModalAdd(props) {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [productImageUrl, setProductProductImageUrl] = useState('');
    let price = Number(productPrice);
    const [isFiledFull, setIsFiledFull] = useState(
        productName.length > 0 && productPrice.length > 0 && productDesc.length > 5 && productImageUrl.length > 10
        && Number.isInteger(price) && price > 0
    )

    const addNewProduct = async() => {
        let action = addNewProductAction({
            productName:productName,
            price: productPrice,
            description: productDesc,
            productImage: productImageUrl
        })
        try{
            await dispatch(action)
            .then(result => {
                if(result) {
                    getAllProducts(dispatch);
                    props.closeModal(false);
                    alert(`${productName} was added successfully`)
                }
            })

        } catch(error){
            alert(error.message);
        }
    }
        
    useEffect(() => {
        setIsFiledFull(productName.length > 0 && productPrice.length > 0 && productDesc.length > 5 && productImageUrl.length > 10
            && Number.isInteger(price) && price > 0
            )
    },[setIsFiledFull, productName, productPrice, productDesc, productImageUrl, price])
    return(
        <div className='modal-background'>
            <div className='modalContainer'>
                <h2>Add New Product</h2>
                <ul className='modalAdd-list'>
                    <li className='modalAdd-listItem'>
                        <h4 className='modalAdd-parmeterTitle'>Product Name</h4>
                        <input value={productName} onChange={event => setProductName(event.target.value)} className='input-style'/>
                    </li>

                    <li className='modalAdd-listItem'>
                        <h4 className='modalAdd-parmeterTitle'>Product Price</h4>
                        <input value={productPrice} onChange={event => setProductPrice(event.target.value)} className='input-style'/>
                    </li>

                    <li className='modalAdd-listItem'>
                        <h4 className='modalAdd-parmeterTitle'>Product Description</h4>
                        <input value={productDesc} onChange={event => setProductDesc(event.target.value)} className='input-style'/>
                    </li>

                    <li className='modalAdd-listItem'>
                        <h4 className='modalAdd-parmeterTitle'>Product Image Url</h4>
                        <input value={productImageUrl} onChange={event => setProductProductImageUrl(event.target.value)} className='input-style'/>
                    </li>
                </ul>
                
                <div className='modal-button-container'>
                    <button className='modal-cancel-button' onClick={() => props.closeModal(false)}>
                        <h4>Cancel</h4>
                    </button>

                    {
                        isFiledFull?
                        (
                            <button className='modal-ok-button' onClick={addNewProduct}>
                                <h4>Add</h4>
                            </button>
                        ) 
                        :
                        (
                            <button className='modal-ok-button-fade'>
                                <h4>Add</h4>
                            </button>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default ModalAdd;