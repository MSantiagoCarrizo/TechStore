import { Link } from "react-router-dom";

export const EmptyCart = () => {
    return (
        <div className="container text-center py-5" >

            <h1> 🛒 Tu carrito está vacío </h1>

            <p style={{ color: '#cbd5e1' }} >
                Todavía no agregaste productos.
            </p>

            <Link to="/" className="btn btn-info" >
                Ver productos
            </Link>

        </div>
    )
}