import { useState, useEffect } from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore";



const ItemListContainer = () => {

const [productos, setProductos] = useState([]) 
const { id } = useParams();  


    useEffect(() => {
            const db = getFirestore();
            const productosCollection = collection(db, "petshop-sectoranimal");
            const q = id ? query(productosCollection, where("categoria", "==", id)) : productosCollection;
            getDocs (q).then(resultado => {
                if (resultado.size>0){
                setProductos(resultado.docs.map(item=>({id:item.id, ...item.data()})))
                } else{
                    console.error("¡No hay productos en su colección!");
                }
            });
    },[id]);
    return (
        <div>
            <h1 className="text-center my-5" style={{ fontWeight: "bolder", fontSize: "35px" }}>PRODUCTOS DESTACADOS</h1>
            <ItemList productos={productos} />
        </div>
    )
} 
export default ItemListContainer;