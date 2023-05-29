import { useState, useEffect } from "react";
import {catalogo} from "../asyncMocke.js"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";


const ItemListContainer = () =>{
    const [productos, setProductos] = useState ([])
    const {id}= useParams ();
    
useEffect (()=> {
    const promesa = new Promise((resolve) => {
        setTimeout(()=>{
            resolve(id ? catalogo.filter(item=>item.categoria ===id): catalogo)
        },2000);
    });

    promesa.then (data =>{
        setProductos (data);
        console.log (data)
    })
    },[id]);
    
return (
    <div>
        <h1 className="text-center my-5" style= {{fontWeight:"bolder", fontSize:"35px"}}>Productos destacados</h1>
        <ItemList productos = {productos}/>
    </div>
)
}
export default ItemListContainer;

/* useEffect (()=>{
    agregarProductos()
    .then(response =>{
        setProductos(response)
    })
},[]); 
 */