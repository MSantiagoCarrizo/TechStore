import './ItemDetail.css'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount'


export const ItemDetail = ({ detail }) => {
    const { addItem, itemQty } = useContext(CartContext)
    const [agregadoAlCarrito, setAgregadoAlCarrito] = useState(false)

    const onAdd = (cantidad) => {
        addItem(detail, cantidad)
        setAgregadoAlCarrito(true)
    }

    const stockActualizado = detail.stock - itemQty(detail.id)

    return (
        <div className="detail-container">
            <div className="detail-image-container">
                <img className="detail-image" src={detail.img} alt={detail.name} />
            </div>
            <div className="detail-info">
                <h2 className="detail-title">{detail.name}</h2>
                <p className='detail-description'>{detail.description}</p>
                <p className='detail-price'>${detail.price},00</p>
                <p className='detail-stock'>Stock disponible: {stockActualizado} unidades</p>

                {agregadoAlCarrito
                    ? <div className='detail-actions'>
                        <Link className='btn btn-outline-info' to='/'>Seguir Comprando</Link>
                        <Link className='btn btn-info ' to='/cart'>Ir al carrito</Link>
                    </div>
                    : <ItemCount stock={stockActualizado} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}

