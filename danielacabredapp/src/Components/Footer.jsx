import Logo from "./images/logo-sector.png"
import img1 from "./images/instagram.svg"
import img2 from "./images/facebook.svg"
import img3 from "./images/twitter.svg"
import img4 from "./images/whatsapp.svg"


const Footer = () => {
    return (
        <div className="row">
            <div className="my-5 p-5">
                <img src={Logo} alt="logo-sector-animal" style={{ width: "150px", marginRight: "3%", marginLeft: "40%" }} />
                <img src={img1} alt="icono de instagram televisor de color" style={{ margin: "5px" }} />
                <img src={img2} alt="icono de facebook letra f color celeste" style={{ margin: "5px" }} />
                <img src={img3} alt="icono pájaro celeste twitter" style={{ margin: "5px" }} />
                <img src={img4} alt="teléfono verde logo whatsapp" style={{ margin: "5px" }} />
                <p className="text-center mt-3"> <b> Argentina, Buenos Aires, Mar del Plata.</b></p>
                <p className="text-center">2023 Sector Animal Diseño y Desarrollo Dsoft</p>
            </div>
        </div>
    )
}
export default Footer;