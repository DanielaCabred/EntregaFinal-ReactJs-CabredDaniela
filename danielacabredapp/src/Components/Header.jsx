import Lupa from './images/search.svg'
import Cartwidget from './Cartwidget'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='container-fluid'>
            <hr size="2px" color="black"/>
            <nav className="navbar navbar-whithe ">
                <div className="container-fluid justify-content-end align-items-center">
                    <form className="d-flex align-items-center">
                        <div className="input-group">
                            <span className="input-group-text">
                                <img src={Lupa} alt="Lupa" style={{ width: '16px', height: '16px' }} />
                            </span>
                            <input className="form-control me-2" type="search" placeholder="Buscar Productos" aria-label="Search" style={{ paddingLeft: '28px' }} />
                        </div>
                    </form>
                    <div className='col-md-1 text-center'>
                        <Cartwidget />
                    </div> 
                    <Link to={"/"}  style={{ color: "lightgrey", textDecoration: "none", marginLeft: "20px", marginRight: "20%" }}
                        onMouseOver={(e) => e.target.style.color = "rgba(255, 165, 0, 1)"}
                        onMouseOut={(e) => e.target.style.color = "lightgrey"}>Ingresar</Link>
                </div>
            </nav>
            <hr size="2px" color="black" />
            <div>
                <Navbar />
            </div>
        </div>
    )
}

export default Header;
