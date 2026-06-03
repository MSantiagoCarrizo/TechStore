import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../services/firebase"
import { Loader } from "./Loader"
import { ItemDetail } from "./ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        setError('')

        const docRef = doc(db, "items", id)

        getDoc(docRef)
            .then((res) => setDetail({ id: res.id, ...res.data() }))
            .catch(() => setError("Hubo un error al cargar el detalle del producto"))
            .finally(() => setLoading(false))
    }, [id])

    return (
        <>
            {
                loading ? <Loader text='Cargando detalle...' /> : error ? <p>{error}</p> : <ItemDetail detail={detail} />
            }
        </>
    )
}