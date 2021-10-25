import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

export default function ItemCount({ stock, initial, handlerCount, handlerItemsCart }) {
    const [contador, setContador] = useState(initial)

    const handleClick = () => {
        handlerItemsCart(contador)
        setContador(0)
        alert(`La cantidad agregada es ${contador}`)
    }

    const disminuirClick = () => {
        if (contador > 0) {
            setContador(contador - 1)
            handlerCount(-1)
        }
    }
    const aumentarClick = () => {
        if (contador < stock) {
            setContador(contador + 1)
            handlerCount(1)
        } else {
            alert(`El stock de ${stock} productos`)
        }
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <Button variant="outline-primary" onClick={disminuirClick} disabled={contador < 1} >-</Button>
                <FormControl className="text-center" aria-label="Lorem ipsum" value={contador} readOnly />
                <Button variant="outline-primary" onClick={aumentarClick}>+</Button>
            </InputGroup>
            <Button variant="primary" onClick={handleClick}>Agregar al carrito</Button>
        </div >
    )
}