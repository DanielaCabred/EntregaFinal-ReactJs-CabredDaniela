import { useState, useEffect } from "react";
import {agregarProductos} from "../asyncMocke.js"
import ItemList from "./ItemList"


const ItemListContainer = ({greeting}) =>{
    const [productos, setProductos] = useState ([])

    useEffect (()=>{
        agregarProductos()
        .then(response =>{
            setProductos(response)
        })
        .catch (error =>{ console.error(error)
        })
    },[])
console.log(productos);
return (
    <div>
        <h1>{greeting}</h1>
        <ItemList productos = {productos}/>
    </div>
)
}
export default ItemListContainer;