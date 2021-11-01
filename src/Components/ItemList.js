import {useEffect, useState} from 'react'
import { getFetch  } from './getFetch ';
import '../styles/ItemList.css'
import Item from './Item';


const ItemList = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch 
        .then( res => {        
            console.log('llamada a api') // alguna accion con la respuesta  
            setProduct(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    },[])   

    return (
        <>
            <h2> Nuestros Productos </h2>
            <div className='Flexbox'>
            { loading ? <h1>Cargando...</h1> :         
                    product.map(prod => <Item key={prod.id} imagen={prod.imagen} nombre={prod.nombre} precio={prod.precio}/>
            
            )
            }
            </div>
        </>
    )
    
            

}
export default ItemList;
