import { useState } from "react";

const ItemCount = ({stock,initial,agregarAlCarrito}) => {
    const [cantidad, setCantidad]= useState (initial)
    
    const incrementar = () =>{
        if (cantidad < stock){
            setCantidad (cantidad + 1)
        }
    }

    const decrementar = ()=>{
        if (cantidad > 1) {
            setCantidad (cantidad - 1)
        }
    }


    return (
        <div>
            <div className="d-flex justify-content-center mx-5 my-3">
                <button className="btn btn-secondary mx-3" onClick={decrementar}>-</button>
                <h4>{cantidad}</h4>
                <button className="btn btn-secondary mx-3" onClick={incrementar}>+</button>
            </div>
            <div className="d-flex justify-content-center">
                <button className="btn btn-secondary btn-lg" onClick={() => agregarAlCarrito(cantidad)} disabled={!stock}>Comprar</button>
            </div>
        </div>
    );
}
export default ItemCount;