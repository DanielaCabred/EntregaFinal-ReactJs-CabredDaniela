import Logo from "./images/logo-sector.png"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
return (
    <div className="my-5">
    <ul style={{ display: "flex", listStyle: "none" }}>
        <li style={{ marginLeft: "15%" }}>
        <NavLink to={"/"}><img src={Logo} alt="logo-sector-animal" style={{ width: "200px"}}/></NavLink>
        </li>
        <li>
            <NavLink to={"/"} style={{ marginRight: "30px", textDecoration: "none", marginLeft: "120px", color: "rgba(255, 165, 0, 1)",fontWeight: "bold",}}>Inicio</NavLink>
        </li>
        
        <li> 
            <NavLink to={"/category/Alimentos"} style={{ color: "black", textDecoration: "none", marginRight: "40px", fontWeight: "bold" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "black"}>Alimentos</NavLink>
        </li>
        
        <li>
        <NavLink to={"/category/Accesorios"} style={{ color: "black", textDecoration: "none", marginRight: "40px", fontWeight: "bold" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "black"}>Accesorios</NavLink>
        </li>
        
        <li>
        <NavLink to={"/category/Farmacia"} style={{ color: "black", textDecoration: "none", marginRight: "40px", fontWeight: "bold" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "black"}>Farmacia</NavLink>
        </li>
        
        <li>
            <NavLink to={"/category/Ofertas"} style={{ color: "black", textDecoration: "none", marginRight: "40px", fontWeight: "bold" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "black"}>Ofertas</NavLink>
        </li>
        
        <li>
            <Link to={"/"} style={{ color: "lightgrey", textDecoration: "none", marginRight: "40px" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "lightgrey"}>Nosotros</Link>
        </li>
        
        <li>
            <Link to={"/"} style={{ color: "lightgrey", textDecoration: "none", marginRight: "40px" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "lightgrey"}>Sucursales</Link>
        </li>
        
        <li>
            <Link to={"/"} style={{ color: "lightgrey", textDecoration: "none", marginRight: "40px" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "lightgrey"}>Envíos</Link>
        </li>
        
        <li>
            <Link to={"/"} style={{ color: "lightgrey", textDecoration: "none", marginRight: "40%" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "lightgrey"}>Contacto</Link>
        </li>
    </ul>
    </div>
);
};

export default Navbar;
