import '../styles/ItemListContainer.css'

const ItemListContainer = ({ valorCarrito, children }) => {
    return (
        <div className='prueba'>
            <p>Este es el futuro carrito {valorCarrito} </p>
            {children}
        </div>
    )
}

export default ItemListContainer
