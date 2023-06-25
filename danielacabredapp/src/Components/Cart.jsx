import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import Alert from "./images/alert.png"
import Tacho from "./images/tacho.png"


const Cart = () => {
    const {carrito,eliminarProductoCarrito,vaciarCarrito, totalCantidadProductos,totalCompra} = useContext(CartContext)
    
    if (totalCantidadProductos() === 0) {
        return (
            <div className = "container">
                <div className = "row my-5">
                    <div className = "col-md-12 text-center">
                        <div className = "alert alert-danger" role="alert">Tu carrito está vacio!<img src={Alert} alt="alerta" widht="15"/></div>
                        <Link to = {"/"} className = "btn btn-warning">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className ="container">
            <div className ="row my-5">
                <div className ="col-md-12">
                    <table className ="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end"><Link onClick={vaciarCarrito} className="btn btn-warning" title={"Vaciar Carrito"}>Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-end">Cantidad</th>
                                <th scope="col" className="text-end">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle text-end">{item.cantidad}</td>
                                    <td className="align-middle text-end">$: {item.precio}</td>
                                    <td className="align-middle text-end"><Link onClick={() => {eliminarProductoCarrito(item.id)}} title={"Eliminar Producto"}><img src={Tacho} alt={"Eliminar Producto"} width={32} /></Link></td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-end"><b>Total a Pagar</b></td>
                                <td className="text-end"><b> $: {totalCompra()}</b></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-warning">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </div>
        </div>
    )
    }
    
    export default Cart;
