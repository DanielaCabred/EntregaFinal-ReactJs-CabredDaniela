import { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({ producto }) => {

    const { id, nombre, imagen, precio, descripcion, stock } = producto

    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const {agregarProductoCarrito}=useContext(CartContext)

    if (!producto) {
        return <div>Cargando...</div>
    }

    const agregarAlCarrito=(cantidad)=>{
        setCantidadAgregada(cantidad)
        
        const producto ={
            id,nombre,precio,imagen
        }

        agregarProductoCarrito(producto,cantidad)
    }   

    return (
        <div className="container">
            <div className="row">
                <div className="card d-flex" style={{ width: "35rem", marginLeft: "25%", marginTop: "5%" }}>
                    <img src={imagen} className="card-img-top img-fluid" alt="foto-producto" />
                    <div className="card-body text-center">
                        <h5 className="card-title" style={{ color: "#D6932F", fontSize: "14px", fontWeight: "bolder", padding: "10px" }}>{nombre}</h5>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text" style={{ fontWeight: "bolder", fontSize: "25px" }}>${precio}</p>
                        <div>
                            {cantidadAgregada > 0 ? (<Link to="/cart" className="btn btn-secondary btn-lg" style={{ backgroundColor: "#30AABA", color: "white", fontSize: "14px", fontWeight: "bolder", border: "none" }}>Terminar Compra</Link>) :
                                (
                                    <ItemCount initial={1} stock={stock} agregarAlCarrito={agregarAlCarrito} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;