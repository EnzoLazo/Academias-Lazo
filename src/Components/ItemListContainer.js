import '../styles/ItemListContainer.css'
import ItemCount from './ItemCount'

const ItemListContainer = ({valorCarrito}) => {
    return (
        <div className='prueba'>
            <p>Este es el futuro carrito {valorCarrito} </p>
            <ItemCount stock={10} initial={1} />
        </div>
    )
}

export default ItemListContainer
