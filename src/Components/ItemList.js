import {useEffect, useState} from 'react'
import { getItem } from '../Components/Item';
import { Card } from 'react-bootstrap';
import '../styles/ItemList.css'


const ItemList = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getItem
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
                    product.map(prod=>  <Card className="marg" key={prod.id} style={{ width: '20rem' }} > 
                                                <Card.Img variant="top" src={prod.imagen} alt='foto producto' />
                                                <Card.Body>
                                                <Card.Title>{prod.nombre}</Card.Title>
                                                <Card.Text>
                                                {prod.precio}
                                                </Card.Text>
                                                </Card.Body>
                                                <div className="card-footer">
                                                    <button className="btn btn-outline-primary btn-block">
                                                        detalle del producto
                                                    </button>
                                                </div>
                                                
                                        </Card>
            
            )
            }
            </div>
        </>
    )
    
            

}
export default ItemList;
