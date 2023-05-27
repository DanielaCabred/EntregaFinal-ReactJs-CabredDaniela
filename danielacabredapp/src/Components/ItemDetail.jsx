import ItemCount from './ItemCount'

const ItemDetail = ({id, nombre, imagen, precio,descripcion,stock}) => {
    return (
        <div className="container">
            <div className="row">
                <div className= "col-md-3">
                    <div className="card d-flex" style={{ width: "18rem" }}>
                        <img src={imagen} className="card-img-top img-fluid" alt="foto-producto"/>
                        <div className="card-body text-center">
                            <h5 className="card-title" style={{ color: "#D6932F", fontSize: "14px", fontWeight: "bolder", padding: "10px"}}>{nombre}</h5>
                            <p className="card-text" style={{ fontWeight: "bolder", fontSize: "25px" }}>${precio}</p>
                            <p className="card-text">{descripcion}</p>
                            <div>
                                <ItemCount initial={1} stock={stock} agregarAlCarrito={(cantidad) => console.log('cantidad agregada ', cantidad)}/>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default ItemDetail;