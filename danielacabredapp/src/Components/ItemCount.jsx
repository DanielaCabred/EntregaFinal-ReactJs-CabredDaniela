import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount=({ stock, initial, agregarAlCarrito })=>{
    const [cantidad, setCantidad] = useState(initial)
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);

    const incrementar=() => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const decrementar=()=>{
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    const agregarCarrito = (cantidad) => {
        if (cantidad <= itemStock) {
            setCantidad(1);
            setItemStock(itemStock - cantidad);
            setVendido(true);
            agregarAlCarrito(cantidad);
        }
    }
    
    useEffect(() => {
        setItemStock(stock);
    }, [stock])


    return (
        <div>
            <div className="d-flex justify-content-center mx-5 my-3">
                <button className="btn btn-secondary mx-3" style={{ backgroundColor: "#30AABA", color: "white", fontSize: "12px", fontWeight: "bolder", border: "none" }} onClick={decrementar}>-</button>
                <h4 style={{ fontSize: '18px' }}>{cantidad}</h4>
                <button className="btn btn-primary mx-3" style={{ backgroundColor: "#30AABA", color: "white", fontSize: "12px", fontWeight: "bolder", border: "none" }} onClick={incrementar}>+</button>
            </div>
            
            <div className="row">
                <div className="col-md-6 text-center mx-5">
                    {vendido ? <Link to={"/cart"} className="btn btn-secondary btn-lg" style={{ backgroundColor: "#30AABA", color: "white", fontSize: "12px", fontWeight: "bolder", border: "none", marginBottom: "5%"}}>Finalizar Compra</Link> :  <button className="btn btn-secondary btn-lg" style={{ backgroundColor: "#30AABA", color: "white", fontSize: "12px", fontWeight: "bolder", border: "none", marginLeft:"65%" }} onClick={() => agregarCarrito(cantidad)} disabled={!stock}>COMPRAR</button>}
                </div>
            </div>
        </div>
    );
}
export default ItemCount;