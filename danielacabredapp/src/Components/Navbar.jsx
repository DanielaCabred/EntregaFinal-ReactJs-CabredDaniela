import Logo from "./images/logo-sector.png"

const Navbar = () => {
return (
    <div className="my-5">
    <ul style={{ display: "flex", listStyle: "none" }}>
        <li style={{ marginLeft: "15%" }}>
        <img src={Logo} alt="logo-sector-animal" style={{ width: "200px"}} />
        </li>
        <li><a href="#" style={{ marginRight: "30px", textDecoration: "none", marginLeft: "120px", color: "rgba(255, 165, 0, 1)",fontWeight: "bold",}}>Inicio</a></li>
        
        <li><a href="#" style={{ color: "black", textDecoration: "none", marginRight: "40px", fontWeight: "bold" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "black"}>Alimentos</a></li>
        
        <li><a href="#" style={{ color: "black", textDecoration: "none", marginRight: "40px", fontWeight: "bold" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "black"}>Accesorios</a></li>
        
        <li><a href="#" style={{ color: "black", textDecoration: "none", marginRight: "40px", fontWeight: "bold" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "black"}>Farmacia</a></li>
        
        <li><a href="#" style={{ color: "black", textDecoration: "none", marginRight: "40px", fontWeight: "bold" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "black"}>Ofertas</a></li>
        
        <li><a href="#" style={{ color: "lightgrey", textDecoration: "none", marginRight: "40px" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "lightgrey"}>Nosotros</a></li>
        
        <li><a href="#" style={{ color: "lightgrey", textDecoration: "none", marginRight: "40px" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "lightgrey"}>Sucursales</a></li>
        
        <li><a href="#" style={{ color: "lightgrey", textDecoration: "none", marginRight: "40px" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "lightgrey"}>Envíos</a></li>
        
        <li><a href="#" style={{ color: "lightgrey", textDecoration: "none", marginRight: "40%" }}
        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"} 
        onMouseOut={(e) => e.target.style.color = "lightgrey"}>Contacto</a></li>
    </ul>
    </div>
);
};

export default Navbar;
