import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList"
import { db } from "../services/firebase"
import { Loader } from "./Loader"


export const ItemListContainer = ({ greeting }) => {
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { type } = useParams()


    useEffect(() => {
        setLoading(true)
        setError('')

        const prodColl = type ? query(collection(db, "items"), where("category", "==", type)) : collection(db, "items")

        getDocs(prodColl)
            .then((res) => {
                const list = res.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setData(list)
            })
            .catch(() => {
                setError("Hubo un error al cargar los productos")
            })
            .finally(() => setLoading(false))
    }, [type])

    return (
        <>
            {
                loading 
                    ? <Loader text={type ? 'Cargando categoría...' : 'Cargando productos...'} /> 
                    : error 
                        ? <div> {error} </div>
                        : <>
                            <h1>{`${greeting} ${type ? type : ''}`}</h1>
                            <ItemList data={data} />
                        </>
            }
        </>

    )
}


