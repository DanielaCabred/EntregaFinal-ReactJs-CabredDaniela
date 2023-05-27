import {useState } from "react";

const ItemCount = ({stock, initial, agregarAlCarrito}) => {
    const [cantidad, setCantidad] = useState(initial)

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-center mx-5 my-3">
                <button className="btn btn-secondary mx-3" style={{ backgroundColor: "#30AABA", color: "white", fontSize: "12px", fontWeight: "bolder", border: "none" }} onClick={decrementar}>-</button>
                <h4 style={{fontSize: '18px'}}>{cantidad}</h4>
                <button className="btn btn-primary mx-3" style={{ backgroundColor: "#30AABA", color: "white", fontSize: "12px", fontWeight: "bolder", border: "none" }} onClick={incrementar}>+</button>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-secondary btn-lg" style={{ backgroundColor: "#30AABA", color: "white", fontSize: "12px", fontWeight: "bolder", border: "none" }} onClick= {() => agregarAlCarrito(cantidad)} disabled={!stock}>COMPRAR</button>
            </div>
        </div>
    );
}
export default ItemCount;