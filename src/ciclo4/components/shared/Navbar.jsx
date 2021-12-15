import logo from '../../styles/img/logo1.jpeg';
import logo1 from '../../styles/img/logo.jpeg';
const Navbar = () => (
    <>
        <nav class="navbar navbar-dark fixed-top" style={{backgroundColor: '#863c59'}}>
                <div class="container-fluid">
                    <a  class="navbar-brand p1" href="index.html">
                        <img src={logo} alt="Trulli" width="40" height="40"/> Willy Wonka</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                         aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <img src={logo1} alt="Trulli" width="200" height="55"/>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body" style={{backgroundColor: '#863c59'}} >
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="Index.html">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="Login.html">Iniciar sesion</a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    </>
)
export default Navbar