import '../styles/ItemListContainer.css'
import ItemList from './ItemList'
import ItemCount from './ItemCount'


const ItemListContainer = ({ valorCarrito }) => {
    const handleClick = (total) => {
        alert(`La cantidad agregada es ${total}`)
        }


    return (
        <div className='prueba'>
            <p>Este es el futuro carrito {valorCarrito} </p>
            <ItemCount stock={8} initial={1} onAdd={handleClick} />
            <ItemList/>
            </div>
    )
}

export default ItemListContainer
