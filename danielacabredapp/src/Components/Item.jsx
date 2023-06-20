import { Link } from "react-router-dom";

const Item = ({id,nombre,imagen,precio,stock}) => {
    return (
        <div className="container" style={{marginLeft:"60px"}}>
            <div className="card d-flex" style={{width: "18rem" }}>
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title" style={{ color: "#D6932F", fontSize: "14px", fontWeight: "bolder", padding: "10px" }}>{nombre}</h5>
                    <Link to ={`/item/${id}`} className="btn btn-secondary btn-lg" style={{ backgroundColor: "#30AABA", color: "white", fontSize: "12px", fontWeight: "bolder", border: "none" }}>
                        VER PRODUCTO
                    </Link>
                    <p className="card-text" style={{fontWeight: "bolder", fontSize: "25px", marginTop:"5%" }}>${precio}</p>
                    <p className="card-text"> Cantidad disponible: {stock}</p>
                </div>
            </div>
        </div>
    )
}
export default Item;
