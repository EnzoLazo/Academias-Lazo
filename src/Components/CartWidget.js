import '../App.css';

const CartWidget = ({ icon, alt, width, itemsCount }) => {
    return (
        <div className='container-cart'>
            <h6>{itemsCount}</h6>
            <img src={icon} alt={alt} width={width} />
        </div>
    )
}

export default CartWidget