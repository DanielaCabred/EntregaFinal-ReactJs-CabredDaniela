import ItemCount from './ItemCount'

const ItemDetail = ({ producto }) => {
    if (!producto) {
    return <div>Cargando...</div>
    }
const {nombre, imagen, precio,descripcion,stock} = producto 
    return (
        <div className="container">
            <div className="row my-5 mx-5">
                    <div className="card d-flex" style={{ width: "30rem" }}>
                        <img src={imagen} className="card-img-top img-fluid" alt="foto-producto"/>
                        <div className="card-body text-center">
                            <h5 className="card-title" style={{ color: "#D6932F", fontSize: "14px", fontWeight: "bolder", padding: "10px"}}>{nombre}</h5>
                            <p className="card-text">{descripcion}</p>
                            <p className="card-text" style={{ fontWeight: "bolder", fontSize: "25px" }}>${precio}</p>
                            <div>
                                <ItemCount initial={1} stock={stock} agregarAlCarrito={(cantidad) => console.log('cantidad agregada ', cantidad)}/>
                            </div>
                        </div>
                    </div>
                </div>    
            
        </div>
    )
}

export default ItemDetail;