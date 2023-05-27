import { useState, useEffect } from "react";
import {agregarProductos} from "../asyncMocke.js"
import ItemList from "./ItemList"


const ItemListContainer = () =>{
    const [productos, setProductos] = useState ([])

    useEffect (()=>{
        agregarProductos()
        .then(response =>{
            setProductos(response)
        })
        .catch (error =>{console.error(error)
        })
    },[])
console.log(productos);
return (
    <div>
        <h1 className="text-center my-5" style= {{fontWeight:"bolder", fontSize:"35px"}}>Productos destacados</h1>
        <ItemList productos = {productos}/>
    </div>
)
}
export default ItemListContainer;