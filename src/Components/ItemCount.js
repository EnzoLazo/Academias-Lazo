import React, {useState} from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';

export default function ItemCount({stock, initial, onAdd}) {
    const [contador, setContador] = useState(initial)

    const handleClick=() =>{
        alert(`La cantidad agregada es ${contador}`) 
        }

    const disminuirClick=() =>{
        contador > 1 ? setContador(contador-1) : alert("No se puede elegir menor")
        }
    const aumentarClick=() => {
        contador < parseInt(stock) ? setContador(contador+1) : alert(`El stock de ${stock} prodcutos`)
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <Button variant="outline-primary" onClick={disminuirClick} disabled={contador < 1 }>-</Button>
                <FormControl className="text-center" aria-label="Lorem ipsum" value={contador}/>
                <Button variant="outline-primary" onClick={aumentarClick}>+</Button>
            </InputGroup>
            <Button variant="primary" onClick={handleClick}>Agregar al carrito</Button>
        </div>
    )
}