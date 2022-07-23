import '../style/style.css';




const ProductItem = props => {
    
    return(
        <div className="item-Container">
            <ul className="list">
                <li className="product-parmeter">
                    <h2>Product Name</h2>
                    <h3>{props.item.productName}</h3>
                </li>

                <li className="product-parmeter">
                    <h2>Product Price</h2>
                    <h3>{props.item.price} $</h3>
                </li>

                <li className="product-parmeter">
                    <h2>Options</h2>
                    <button onClick={() => props.openModalEddit(props.item)} className='options-Button'>
                        <h4>Edit</h4>
                    </button>
                    <button onClick={() => props.openMoadlDelete(props.item)} className='options-Button'>
                        <h4>Delete</h4>
                    </button>
                </li>
            </ul>
        </div>
    )
}




export default ProductItem;