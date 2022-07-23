import '../style/style.css';




const Past5Item = props => {
    
    return(
        <div className="top-past-five-item-container">
            <ul className="item-list-style">
                <li>
                    <p className="date-and-total-title-style">Date</p>
                    <p className='date-and-total-text-style'>{new Date(props.item.date).toLocaleDateString()}</p>
                </li>

                <li>
                    <p className="date-and-total-title-style">Total</p>
                    <p className='date-and-total-text-style'>{props.item.total} $</p>
                </li>
            </ul>
            
        </div>
    )
}


export default Past5Item;