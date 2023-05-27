import { useState, useEffect } from "react"
import { agregarProductoId} from "../asyncMocke.js"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const {itemId} = useParams ()
    
    useEffect(() => {
        agregarProductoId(itemId)
            .then (response => {
                setProducto(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
        <div>
            <ItemDetail producto = {producto} />
        </div>
    )
}
export default ItemDetailContainer