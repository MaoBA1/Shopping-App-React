import '../style/style.css';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { edditProductAction } from '../../store/actions/productsActions';


function ModalEdit(props) {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState(props.params.productName);
    const [productPrice, setProductPrice] = useState(props.params.price);
    const [productDesc, setProductDesc] = useState(props.params.description);
    const [productImageUrl, setProductProductImageUrl] = useState(props.params.productImage);
    let price = Number(productPrice);
    const [isFiledFull, setIsFiledFull] = useState(
        productName.length > 0 && productDesc.length > 5 && productImageUrl.length > 10
        && Number.isInteger(price) && price > 0
    )
       
    useEffect(() => {
        setIsFiledFull(productName.length > 0 && productDesc.length > 5 && productImageUrl.length > 10
            && Number.isInteger(price) && price > 0
            )
    })


    const edditProduct = async() => {
        let action = edditProductAction({
            productName:productName,
            price: productPrice,
            description: productDesc,
            productImage: productImageUrl
        },props.params._id)
        try{
            await dispatch(action)
            .then(result => {
                if(result) {
                    props.closeModal(false);
                    alert(`${productName} was Eddit successfully`)
                }
            })

        } catch(error){
            alert(error.message);
        }
    }

    return(
        <div className='modal-background'>
            <div className='modalContainer'>
                <h2>Eddit {props.params.productName}</h2>
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
                            <button onClick={edditProduct}className='modal-ok-button'>
                                <h4>Eddit</h4>
                            </button>
                        ) 
                        :
                        (
                            <button className='modal-ok-button-fade'>
                                <h4>Eddit</h4>
                            </button>
                        )
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default ModalEdit;