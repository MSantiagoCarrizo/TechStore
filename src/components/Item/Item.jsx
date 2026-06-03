import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


export const Item = ({producto}) => {
  return (
    <Card className="product-card h-100">
      <Card.Img className="product-image" variant="top" src={producto.img} />
      <Card.Body className="product-body">
        <Card.Title className="product-title">{producto.name}</Card.Title>
        <Card.Text className="product-price">
          $ {producto.price},00
        </Card.Text>
         <Link className='btn btn-dark product-btn' to={`/item/${producto.id}`}>Ver más</Link>
      </Card.Body>
    </Card>
  )
}


