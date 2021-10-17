import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import { pedirProductos } from "../../funciones/pedirProductos";
import "./estilos.css"
import { ItemList } from "./ItemList";



export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)


    const {categoryId} = useParams()

    useEffect(()=>{
        setLoading(true)

        pedirProductos()
            .then((res) => {

                if (categoryId) {
                    setItems( res.filter( prod => prod.category === categoryId) )
                } else {
                    setItems( res )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])



    return (
        <section className="container my-5">
            {
                loading 
                    ? <h2 className="titulo">Cargando Productos...</h2>
                    : <ItemList productos={items}/>
            }
            
        </section>
    )
}


/* 
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
) */

