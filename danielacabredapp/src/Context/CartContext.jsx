import { createContext, useState } from "react";

export const CartContext = createContext({
        carrito:[]
    }) 

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    console.log(carrito);

    const agregarProductoCarrito = (item, cantidad) => {
        if (estaEnElCarrito(item.id)) {
            let pos = carrito.findIndex(producto => producto.id === item.id)
            carrito[pos].cantidad += cantidad
            setCarrito([...carrito]);
        } else {
            setCarrito([...carrito, {...item, cantidad:cantidad}]);
                
        }
    }

    const eliminarProductoCarrito=(id)=>{
        const items = carrito.filter(item=>item.id !== id)
        setCarrito([...items])
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const estaEnElCarrito=(id)=>{
        return carrito.some(item =>item.id === id)
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

return (
        <CartContext.Provider value={{carrito, agregarProductoCarrito,eliminarProductoCarrito,vaciarCarrito,totalCantidadProductos,totalCompra}}>
            {children}
        </CartContext.Provider>
    )
}
