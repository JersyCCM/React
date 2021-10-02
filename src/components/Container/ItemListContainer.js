import React from "react";
import {img} from "../img"
import "./estilos.css"

export const ItemListContainer = (props) => {
    console.log(props)

    return(
        <div>
        <ul className="estilosList">
            <li><p className="texto">Carne Picada</p><img className="tamaño" src={img[0]}/></li>
            <li><p className="texto">Bife de chorizo</p><img className="tamaño" src={img[2]}/></li>
            <li><p className="texto">Pollo</p><img className="tamaño" src={img[1]}/></li>
            <li><p className="texto"> Cerdo</p><img className="tamaño" src={img[3]}/></li>

        </ul>
        </div>
    )
}