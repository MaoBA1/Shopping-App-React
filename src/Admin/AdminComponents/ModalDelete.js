import '../style/style.css';
import { useDispatch } from 'react-redux';
import { deleteProductAction } from '../../store/actions/productsActions';



function ModalDelete(props) {
    const dispatch = useDispatch();

    const edditProduct = async() => {
        let action = deleteProductAction(props.params._id)
        try{
            await dispatch(action)
            .then(result => {
                if(result) {
                    props.closeModal(false);
                    alert(`${props.params.productName} was deleted successfully`)
                }
            })

        } catch(error){
            alert(error.message);
        }
    }
    
    return(
        <div className='modal-background'>
            <div className='modalContainer'>
                <h2>Are you sure you want to delete {props.params.productName} ?</h2>
                <div className='img-container'>
                    <img src={props.params.productImage} className='img' alt='item'/>
                </div>

                <div className='modal-button-container'>
                    <button className='modal-cancel-button' onClick={() => props.closeModal(false)}>
                        <h4>Cancel</h4>
                    </button>
                    
                    <button onClick={edditProduct} className='modal-ok-button'>
                        <h4>Delete</h4>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete;