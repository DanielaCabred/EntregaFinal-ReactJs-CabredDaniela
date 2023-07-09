import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount=({ stock, agregarAlCarrito })=>{
    const [cantidad, setCantidad] = useState(1)
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);

    const incrementar=() => {
        if (cantidad < itemStock) {
            setCantidad(cantidad + 1)
        }
    }

    const decrementar=()=>{
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    const addToCart = () => {
        if (cantidad <= itemStock) {
            setItemStock(itemStock - cantidad);
            setCantidad(1)
            setVendido(true);
            agregarAlCarrito(cantidad)
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
                <button className="btn btn-primary mx-3" style={{ backgroundColor: "#30AABA", color: "white", fontSize: "14px", fontWeight: "bolder", border: "none" }} onClick={incrementar}>+</button>
            </div>
            
            <div className="row">
                <div className="col-md-6 mx-auto text-center">
                    {vendido ? <Link to={"/cart"} className="btn btn-secondary btn-lg" style={{ backgroundColor: "#30AABA", color: "white", fontSize: "14px", fontWeight: "bolder", border: "none", marginBottom: "5%",marginTop:"5%"}}>FINALIZAR COMPRA</Link> : <button className="btn btn-secondary btn-lg" style={{ backgroundColor: "#30AABA", color: "white", fontSize: "14px", fontWeight: "bolder", border: "none"}} onClick={addToCart} disabled={!stock}>COMPRAR</button>}
                </div>
            </div>
        </div>
    );
}
export default ItemCount;