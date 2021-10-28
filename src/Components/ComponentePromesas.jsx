import {useEffect, useState} from 'react'
import { getItem } from '../Components/Item';
import { Card } from 'react-bootstrap';


const ComponentePromesas = () => {
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


    console.log(product)


    return (
        <>
            <h2> Nuestros Productos </h2>
            { loading ? <h1>Cargando...</h1> :         
                    product.map(prod=> <Card key={prod.id}  className="card w-50 mt-5"  style={{ width: '18rem' }} > 
                                                <Card.Img variant="top" src={prod.imagen} alt='' />
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
        </>
    )
    
            

}
export default ComponentePromesas;
