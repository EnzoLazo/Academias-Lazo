import '../styles/Contador.css'
import ItemCount from './ItemCount'

const Contador = () => {
    const handleClick = (total) => {
        alert(`La cantidad agregada es ${total}`)
        }


    return (
        <div className='prueba'>
            <ItemCount stock={8} initial={1} onAdd={handleClick} />
            </div>
    )
}

export default Contador
