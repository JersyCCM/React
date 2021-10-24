import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'


export const CartScreen = () => {

    const {carrito, vaciarCarrito, removeItem, calcularTotal}= useContext(CartContext)

  

    return (
        <div className="container my-5">
            <h2>Resumen de Compra</h2>
            
        {
            carrito.map((prod) => (  
                <div>
                    <h4>{prod.name}</h4>
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Precio: {prod.price * prod.cantidad}</p>
                    <button className="btn btn-dark" onClick={() => removeItem(prod.id)}>
                        <BsFillTrashFill/>
                    </button>
                </div>

            ))
        }
           
        <h3>Precio Total: ${calcularTotal()} </h3>
        <button
        className="btn btn-dark"
        onClick={vaciarCarrito}>
            Vaciar Carrito
        </button>
        </div>
    )
}
