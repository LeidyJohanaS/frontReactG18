import logo from '../../styles/img/logo1.jpeg';
import logo1 from '../../styles/img/logo.jpeg';
import { Link } from 'react-router-dom';
const Navbar = () => (
    <>
        <nav className="navbar navbar-dark fixed-top" style={{backgroundColor: '#863c59'}}>
                <div className="container-fluid">
                    <Link  className="navbar-brand p1" to="/">
                        <img src={logo} alt="Trulli" width="40" height="40"/> Willy Wonka</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                         aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <img src={logo1} alt="Trulli" width="200" height="55"/>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body" style={{backgroundColor: '#863c59'}} >
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Iniciar sesion</Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    </>
)
export default Navbar