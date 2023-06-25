import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { collection, getFirestore, addDoc} from "firebase/firestore";
import { Navigate } from "react-router-dom";



const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [ordenId, setOrdenId]= useState("")
    const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext)

    const generarOrden=(event)=>{
        
        if (nombre.length === 0 ){
            return false;
        }
        if (email.length === 0 ){
            return false;
        }
        if (telefono.length === 0){
            return false;
        }

    event.preventDefault()

    const cliente = {nombre: nombre, email: email, telefono: telefono}
    const productos = carrito.map(item=>({id:item.id, nombre:item.nombre, cantidad:item.cantidad, precio:item.precio, total:item.cantidad * item.precio}))
    const fecha = new Date();
    const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`
    const total = totalCompra()
    const orden = {cliente:cliente, productos:productos, date:date, totalCompra:total}
        
    const db = getFirestore()
        const OrdersCollection = collection(db, "orders")
        addDoc(OrdersCollection, orden).then(resultado => {
            vaciarCarrito();
            setOrdenId(resultado.id);
    })
    .catch(resultado =>{
        console.log("Error 404");
    })
}
return (
    <div className="container my-5 ">
        <div className="row" >
            <div className="col-md-6">
                <form>
                    <div className="mb-3">
                        <label className="form-label"><b>Nombre y Apellido</b></label>
                        <input type="text" className="form-control"onInput={(e)=>{setNombre(e.target.value)}}/>
                        
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><b>Email</b></label>
                        <input type="text" className="form-control"onInput={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><b>Teléfono</b></label>
                        <input type="number" className="form-control"onInput={(e)=>{setTelefono(e.target.value)}}/>
                    </div>
                    <button type="submit" className="btn btn-warning" style={{ display: 'block', margin: '0 auto' }}onClick={(event)=>generarOrden(event)}><b>Generar Orden</b></button>
                </form>
            </div>
            <div className="col-md-6">
                <table className="table"> 
                    <tbody>
                        {
                            carrito?.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle"><div className="d-flex align-items-center">
                                    <span className="me-2">{item.cantidad}</span>
                                    <span>x</span>
                                    <span className="ms-2">${item.precio}</span>
                                    </div></td>
                                    <td className="align-middle text-center">${item.precio*item.cantidad}</td>
                                </tr>
                        ))
                        }
                        <tr>
                            <td colSpan={3} className="align-middle text-center p-3"><b>Total a Pagar :</b></td>
                            <td className="align-middle text-center"><b> ${totalCompra()}</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
            <div className="row">
                <div className="col text-center">
                        {ordenId !== "" ? <Navigate to={"/thankyou/" + ordenId}/> : ""}
                </div>
            </div>
    </div>
)
}
export default Checkout