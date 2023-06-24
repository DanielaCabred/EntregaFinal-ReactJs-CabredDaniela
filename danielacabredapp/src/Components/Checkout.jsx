import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"



const Checkout = () => {
const [nombre, setNombre] = useState("")
const [email, setEmail] = useState("")
const [telefono, setTelefono] = useState("")
const [orden, setOrden]= useState("")
const {carrito, totalCompra} = useContext(CartContext)

const generarOrden=()=>{
    const cliente = {nombre: nombre, email: email,telefono: telefono}
    const productos = carrito.map(item=>({id:item.id, nombre:item.nombre, precio: item.precio}))
    const fecha = new Date();
    const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`
    const total = totalCompra()
    const orden = {cliente:cliente, productos:productos, date:date, total:total}
    console.log(orden);
}
    
return(
    <div className="container my-5 ">
        <div className="row" >
            <div className="col-md-6">
                <form>
                    <div className="mb-3">
                        <label for="Nombre y Apellido" className="form-label"><b>Nombre y Apellido</b></label>
                        <input type="text" className="form-control" onInput={(e)=>{setNombre(e.target.value)}}/>
                        
                    </div>
                    <div className="mb-3">
                        <label for="Email" className="form-label"><b>Email</b></label>
                        <input type="text" className="form-control"onInput={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label for="Teléfono" className="form-label"><b>Teléfono</b></label>
                        <input type="number" className="form-control"onInput={(e)=>{setTelefono(e.target.value)}}/>
                    </div>
                    <button type="submit" className="btn btn-warning" onClick={generarOrden}><b>Generar Orden</b></button>
                </form>
            </div>
            <div className="col-md-6">
                <tbody>
                    {carrito?.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                            <td className="align-middle">{item.nombre}</td>
                            <td className="align-middle">{item.cantidad} x ${item.precio}</td>
                            <td className="align-middle text-center">${item.precio*item.cantidad}</td>
                        </tr>
                    ))
                    }
                    <tr>
                        <td colSpan={2} className="align-middle text-end p-5"><b>Total a Pagar :</b></td>
                        <td className="align-middle text-center"><b> ${totalCompra()}</b></td>
                    </tr>
                </tbody>
            </div>
        </div> 
    </div>
)
}
export default Checkout