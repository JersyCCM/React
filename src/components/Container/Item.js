import React from 'react'
import{Card, Button} from 'react-bootstrap'
import "./estilos.css"


export const Item = ({id, name, price, img, description}) => {
    //console.log(props)

    return (
        <Card style={{ width: '18rem' }} className="m-3">
        <Card.Img variant="top" src={img} className= "tamaño" />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Precio: ${price} xKG</Card.Text>
            <Button variant="primary">Lo quiero</Button>
        </Card.Body>
        </Card>
    )
}



    