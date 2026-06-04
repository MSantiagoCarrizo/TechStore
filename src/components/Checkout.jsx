import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { CartContext } from '../context/CartContext'
import { db } from '../services/firebase'
import { Loader } from './Loader'
import { EmptyCart } from './Cart/EmptyCart'

export const Checkout = () => {

    const { cart, total, clear } = useContext(CartContext)

    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const finalizarCompra = (e) => {

        e.preventDefault()

        setError('')
        
        if (!name || !lastname || !address || !email) {
            setError('Completa todos los campos')
            return
        }

        setLoading(true)

        const order = {
            buyer: {
                name,
                lastname,
                address,
                email
            },
            products: cart,
            total: total(),
            date: serverTimestamp()
        }

        const orders = collection(db, 'orders')

        addDoc(orders, order)

            .then((res) => {
                setOrderId(res.id)
                clear()
            })
            .catch(() => {
                setError('Hubo un error al generar tu orden, intenta nuevamente')
            })
            .finally(() => {
                setLoading(false)
            })
    }

    if (loading) {
        return <Loader />
    }

    if (!cart.length && !orderId) {
        return <EmptyCart />
    }

    if (orderId) {
        return (
            <div className="container text-center py-5">

                <h2 className="mb-3">
                    ✅ Compra realizada correctamente
                </h2>
                <p>
                    Tu orden fue generada exitosamente.
                </p>
                <p>
                    ID de la orden:
                </p>
                <strong style={{ color: '#00d4ff', fontSize: '1.2rem' }} >
                    {orderId}
                </strong>

                <div className="mt-4">
                    <Link to="/" className="btn btn-info" >
                        Volver al inicio
                    </Link>
                </div>

            </div>
        )
    }

    return (
        <div className="container py-5" style={{ maxWidth: '700px' }} >

            <h1 className="mb-4 text-center">
                Checkout
            </h1>

            {
                error &&
                <div className="alert alert-danger" role="alert" >
                    {error}
                </div>
            }

            <form onSubmit={finalizarCompra} className="d-flex flex-column gap-3" >

                <input
                    className="form-control"
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    className="form-control"
                    type="text"
                    placeholder="Apellido"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />

                <input
                    className="form-control"
                    type="text"
                    placeholder="Dirección"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button className="btn btn-success" type="submit" >
                    Finalizar compra
                </button>

            </form>

            <h2 className="text-center mt-4" style={{ color: '#00d4ff' }} >
                Total: ${total()}
            </h2>

        </div>
    )
}