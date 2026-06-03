import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";

export const CartView = () => {
    const { cart, clear, removeItem, total } = useContext(CartContext)

    return (
        <div className="container py-5">

            <h1 className="mb-4"> Tu carrito </h1>
            <Link to="/" className="btn btn-outline-info mb-4" >
                Seguir comprando
            </Link>

            {
                cart.map((compra) => (
                    <div
                        key={compra.id}
                        className="card mb-3 p-3"
                        style={{
                            background: 'rgba(255,255,255,.04)',
                            border: '1px solid rgba(255,255,255,.08)',
                            color: '#f8fafc'
                        }} >

                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3" >
                            <img
                                src={compra.img}
                                alt={compra.name}
                                style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                            />
                            <span>{compra.name}</span>
                            <span>
                                Cantidad: {compra.quantity}
                            </span>
                            <span style={{ color: '#00d4ff', fontWeight: '700' }} >
                                ${compra.price * compra.quantity}
                            </span>
                            <button className="btn btn-outline-danger" onClick={() => removeItem(compra.id)} >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))
            }

            <h3 style={{ color: '#00d4ff', marginTop: '30px' }} >
                Total: ${total()}
            </h3>
            <div className="d-flex justify-content-center gap-3 flex-wrap mt-4" >
                <button className="btn btn-outline-warning" onClick={clear} >
                    Vaciar carrito
                </button>
                <Link to="/checkout" className="btn btn-success" >
                    Finalizar compra
                </Link>
            </div>

        </div>
    )
}
