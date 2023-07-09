import { useContext, useEffect, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext';

const ItemDetail = ({producto}) => {
    const {agregarProductoCarrito} = useContext(CartContext)
    const [cantidadAgregada, setCantidadAgregada] = useState({})
    const {nombre, imagen, precio, descripcion, stock } = producto
    
    const agregarAlCarrito =(cantidad) =>{
        agregarProductoCarrito(cantidadAgregada,cantidad)
    }

    useEffect(()=>{
        setCantidadAgregada(producto)
    }, [producto]);
    
    if (!producto) {
        return <div>Cargando...</div>
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
                            {cantidadAgregada > 0 ? (<Link to="/cart" className="btn btn-secondary btn-lg" style={{ backgroundColor: "#30AABA", color: "white", fontSize: "14px", fontWeight: "bolder", border: "none" }}>TERMINAR COMPRA</Link>) :
                                (
                                    <ItemCount stock={stock} agregarAlCarrito ={agregarAlCarrito}/>
                                )
                            }
                            <div><Link to="/" className="btn btn-secondary btn-lg" style={{ backgroundColor: "#30AABA", color: "white", fontSize: "14px", fontWeight: "bolder", border: "none", marginTop: "5%" }}>SEGUIR COMPRANDO</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;