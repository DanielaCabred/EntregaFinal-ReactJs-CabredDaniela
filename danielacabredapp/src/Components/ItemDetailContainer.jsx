import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.jsx"
/* import { catalogo } from "../asyncMocke.js"  */
import { useParams } from "react-router-dom"
import { doc, getDoc , getFirestore } from "firebase/firestore";



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const {id} = useParams (); 
    /* const agregarProductoId=(id) =>{
        return new Promise((resolve) => {
            setTimeout(() => {
            resolve(catalogo.find(item => item.id === parseInt(id))); 
            }, 1000);
        });
    }  

useEffect(() => {
        agregarProductoId(itemId)
            .then (response => {
                setProducto(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId]) */

    useEffect(() => {
        const db = getFirestore();
        const item = doc(db, "petshop-sectoranimal", id);
        getDoc(item).then(resultado => {
            if (resultado.exists()) {
                setProducto({id:resultado.id, ...resultado.data()});
            } else {
                console.log("El Producto No Existe!");
            }
        });
    }, [id]);

    return (
        <div>
            <ItemDetail producto = {producto} />
        </div>
    )
}
export default ItemDetailContainer