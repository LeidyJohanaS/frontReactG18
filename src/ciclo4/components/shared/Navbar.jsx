import logo from "../../styles/img/logo1.jpeg";
import logo1 from "../../styles/img/logo.jpeg";
//import Perfil from './Perfil';
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
const Navbar = () => (
  <>
    <nav
      className="navbar navbar-dark fixed-top"
      style={{ backgroundColor: "#863c59" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand p1" to="/">
          <img src={logo} alt="Trulli" width="40" height="40" /> Willy Wonka
        </Link>
        <OffCanvasExample placement={"end"}></OffCanvasExample>
      </div>
    </nav>
  </>
);
export default Navbar;

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        onClick={handleShow}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo1} alt="Trulli" width="200" height="55" />
            <div class="card" style={{width: "18rem"}}>
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{user.type === "ASE"
                ? "Asesor"
                : user.type === "COORD"
                ? "Coordinador"
                : user.type === "ADM"
                ? "Administrador"
                : ""}</h6>
                
                
              </div>
            </div>
            
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Iniciar sesion
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
