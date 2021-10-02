import React from "react";
import {img} from "../img"
import "./estilos.css"

export const ItemListContainer = ({greeting}) => {
    

    return(
        <div>
            <h1 className="titulo" >{greeting}</h1>

        <ul className="estilosList">
            <li><p className="texto">Carne Picada</p><img className="tamaño" src={img[0]} alt="CarneP"/></li>
            <li><p className="texto">Bife de chorizo</p><img className="tamaño" src={img[2]} alt="Bife"/></li>
            <li><p className="texto">Pollo</p><img className="tamaño" src={img[1]} alt="Pollo"/></li>
            <li><p className="texto"> Cerdo</p><img className="tamaño" src={img[3]} alt="Cerdo"/></li>

        </ul>
        </div>
    )
}