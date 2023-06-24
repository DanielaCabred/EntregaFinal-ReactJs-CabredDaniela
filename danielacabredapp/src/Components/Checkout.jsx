import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"



const Checkout = () => {
const [nombre, setNombre]= useState("")
const [email, setEmail]= useState("")
const [telefono, setTelefono]= useState("")
const {carrito, totalCompra}= useContext(CartContext)
    
return(
    <div classNameName="container my-5 ">
        <div classNameName="row" >
            <div classNameName="col-md-6">
                <form>
                    <div className="mb-3">
                        <label for="Nombre y Apellido" className="form-label">Nombre y Apellido</label>
                        <input type="text" className="form-control"/>
                        
                    </div>
                    <div className="mb-3">
                        <label for="Email" className="form-label">Email</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label for="Teléfono" className="form-label">Teléfono</label>
                        <input type="number" className="form-control"/>
                    </div>
                    <button type="submit" classNameName="btn btn-warning">Generar Orden</button>
                </form>
            </div>
            <div classNameName="col-md-6">
                <tbody>
                    {carrito?.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                            <td className="align-middle">{item.nombre}</td>
                            <td className="align-middle text-end">{item.cantidad} x ${item.precio}</td>
                            <td className="align-middle text-end">${item.precio*item.cantidad}</td>
                        </tr>
                    ))
                    }
                    <tr>
                        <td colSpan={3}>&nbsp;</td>
                        <td className="text-end"><b>Total a Pagar</b></td>
                        <td className="text-end"><b> $:{totalCompra()}</b></td>
                    </tr>
                </tbody>
            </div>
        </div> 
    </div>
)
}
export default Checkout