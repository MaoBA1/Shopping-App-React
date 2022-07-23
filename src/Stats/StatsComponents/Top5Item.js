import '../style/style.css';




const Top5Item = props => {
    
    return(
        <div className="top-five-item-container">
            <ul className="item-list-style">
                <li>
                    <p className="item-title-style">Product</p>
                    <p className='item-text-style'>{props.item.productName}</p>
                </li>

                <li>
                    <p className="item-title-style">Price</p>
                    <p className='item-text-style'>{props.item.price} $</p>
                </li>

                <li>
                    <p className="item-title-style">Product Image</p>
                    <img
                        className="top-five-item-img"
                        src={props.item.productImage}
                        alt='item'
                    />
                </li>

                <li>
                    <p className="item-title-style">Units sold</p>
                    <p className='item-text-style'>{props.item.countOfSales}</p>
                </li>
            </ul>
            
        </div>
    )
}


export default Top5Item;