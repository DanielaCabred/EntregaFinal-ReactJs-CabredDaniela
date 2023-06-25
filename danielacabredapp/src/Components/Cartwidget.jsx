import Carrito from "./images/cart.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
    const { totalCantidadProductos } = useContext(CartContext);

    return (
        <div>
            <Link to = {"/cart"} style = {{ color: "lightgrey", textDecoration: "none" }}>
                <button type="button" className = "btn btn-light text-dark position-relative"
                    onMouseOver={(e) => {
                        e.target.style.color = "rgba(255, 165, 0, 1)";
                    }}
                    onMouseOut = {(e) => {
                        e.target.style.color = "lightgrey";
                    }}>
                    <img className = "me-3" src={Carrito} alt="carrito" style = {{ width: "24px", height: "24px" }}/>
                    <span style = {{ color: "inherit" }}>Carrito</span>

                    <span className = "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
                        {totalCantidadProductos()}
                    </span>
                </button>
            </Link>
        </div>
    );
};

export default CartWidget;