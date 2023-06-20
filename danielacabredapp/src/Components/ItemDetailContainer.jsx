import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.jsx"

import { useParams } from "react-router-dom"
import { doc, getDoc , getFirestore } from "firebase/firestore";



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const {id} = useParams (); 
    
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