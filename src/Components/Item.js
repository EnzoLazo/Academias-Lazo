import { Card } from 'react-bootstrap';
import '../styles/ItemList.css'

const Item = ({imagen, nombre, precio}) => (
    <Card className="marg" style={{ width: '20rem', height: '24rem' }} >
        <Card.Img variant="top" src={[imagen]} alt='foto producto' />
        <Card.Body>
            <Card.Title>{[nombre]}</Card.Title>
            <Card.Text>
                {[precio]}
            </Card.Text>
        </Card.Body>
        <div className="card-footer">
            <button className="btn btn-outline-primary btn-block">
                detalle del producto
            </button>
        </div>

    </Card>
)

export default Item;