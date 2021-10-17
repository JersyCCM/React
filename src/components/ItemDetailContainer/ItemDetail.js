import React from 'react'
import { useHistory } from 'react-router'
import "./detail.css"


export const ItemDetail = ({id, name, price, img, description, category}) => {

const {goBack} = useHistory()



    return (
        <div className="container">
            <h2 className= "titulo">{name}</h2>

            <div className="product-detail">

            <img className= "imgDetail" src={img}alt={name}></img>

            <div className=" descriptionDetail">
            <p className="parrafo">{description} 
            <h4>Precio: ${price}</h4>
            <button className=" btn btn-primary-outline" onClick={()=> goBack()}>  Volver </button>
            </p>
            </div>
         
            </div>
            </div>
    )
}
