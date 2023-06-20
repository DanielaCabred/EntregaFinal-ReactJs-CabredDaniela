import { createContext, useState } from "react";

export const CartContext=createContext({
    carrito:[]
}) 

export const CartProvider=({children})=>{

    const [carrito, setCarrito]= useState([])

    console.log(carrito);


    const agregarProductoCarrito=(item, cantidad)=>{
        if(!estaEnElCarrito(item.id)){
            setCarrito(prev =>[...prev,{...item,cantidad}])
        }else{
            console.error("El producto fue agregado");
        }
    }

    const eliminarProductoCarrito=(id)=>{
        const renderCarrito=carrito.filter(item=>item.id !==id)
        setCarrito(renderCarrito)
    }

    const vaciarCarrito=()=>{
        setCarrito([])
    }

    const estaEnElCarrito=(id)=>{
        return carrito.some(item=>item.id===id)
    }

    const totalCantidadProductos = () => {
        let totalCantidad = 0;
        carrito.forEach((item) => {
        totalCantidad += item.cantidad});
        return totalCantidad;
    }
    
    const totalCompra = () => {
        let totalAPagar = 0;
        carrito.forEach((item) => {
          totalAPagar += item.precio * item.cantidad;});
        return totalAPagar;
    }

    return(
        <CartContext.Provider value={{carrito, agregarProductoCarrito,eliminarProductoCarrito,vaciarCarrito,totalCantidadProductos,totalCompra}}>
            {children}
        </CartContext.Provider>
    )
}
