import { useState } from "react"

export const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(1)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const comprar = () => {
        onAdd(count)
    }

    return (
        <>
            {
                stock > 0

                ?

                    <div className="counter-container">
                        <div className="d-flex align-items-center justify-content-center gap-3 mb-3">

                            <button className="btn btn-outline-danger" onClick={restar} >
                                -
                            </button>

                            <span className="px-3 py-2 fw-bold fs-5" >
                                {count}
                            </span>

                            <button className="btn btn-outline-success" onClick={sumar} >
                                +
                            </button>
                        </div>

                        <button className="btn btn-primary" onClick={comprar} >
                            Agregar al carrito
                        </button>
                    </div>

                : <p>Lo sentimos, por el momento no hay stock disponible.</p>
            }
        </>
    )
}