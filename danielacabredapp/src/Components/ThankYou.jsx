import { Link, useParams } from "react-router-dom";


const ThankYou = () => {
    const {id} = useParams();

    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div class="alert alert-warning" role="alert">
                        <h2>¡¡Gracias por tu compra!!</h2>
                        <p>Orden de compra: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn btn-warning"><b>Volver a la Página Principal</b></Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou;