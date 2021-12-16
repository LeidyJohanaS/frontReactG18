//import Navbar from './ciclo4/components/shared/Navbar';
//import Perfil from '../shared/Perfil';
const UsuariosADM = () => (
    <>
    <div className="container">
    <div className="row">
      <div className="col-md-10">
        <h1>Usuarios</h1>
      </div>
      <div className="col-md-2">
        <button id="registrarUsuario" type="button" className="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#modalUsuario">
          Registrar usuario
        </button>
      </div>
    </div>
    <div className="row">
      <table id="tablaUsuarios" className="table">

      </table>
    </div>

  </div>


  <div className="modal fade" id="modalUsuario" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Usuario</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form id="login-form" className="form row g-2" action="" method="post">
            <h3 className="p2 text-center">Registrar Usuario</h3>
            <div className="col-md-6">
              <label for="identification" className="p3">Identificacion:</label><br />
              <input type="number" name="identification" id="identification" className="form-control" required
                maxLength="80" />
            </div>
            <div className="col-md-6">
              <label for="name" className="p3">Nombre y apellido:</label><br />
              <input type="name" name="name" id="name" className="form-control" required maxLength="80" />
            </div>
            <div className="col-md-6">
              <label for="address" className="p3">Direccion:</label><br />
              <input type="text" name="address" id="address" className="form-control" required maxLength="80" />
            </div>
            <div className="col-md-6">
              <label for="cellphone" className="p3">Celular:</label><br />
              <input type="number" name="cellphone" id="cellphone" className="form-control" required maxLength="80" />
            </div>
            <div className="col-md-6">
              <label for="email" className="p3">E-mail:</label><br />
              <input type="text" name="email" id="email" className="form-control" required maxLength="50" />
              <span id="badEmail" className="badEmail" style={{"display":"none"}}></span>
            </div>
            <div className="col-md-6">
              <label for="password" className="p3">Clave:</label><br />
              <input type="password" name="password" id="password" className="form-control" required maxLength="50" />
            </div>
            <div className="col-md-6">
              <label for="passwordrepeat" className="p3">Confirmar Clave:</label><br />
              <input type="password" name="passwordrepeat" id="passwordrepeat" className="form-control" required
                maxLength="50" />
            </div>
            <div className="col-md-6">
              <label for="zone" className="p3">Zona :</label><br />
              <input type="text" name="zone" id="zone" className="form-control" required maxLength="80" />
            </div>
            <div className="col-md-12">
              <label for="select" className="p3">Cargo</label>
              <select id="type" className="form-select" name="select">
                <option value="ADM" selected>Administrador</option>
                <option value="COORD">Coordinador de zona</option>
                <option value="ASE" selected>Asesor comercial</option>
              </select>
            </div>

          </form>
        </div>
        <div className="modal-footer">

        </div>
      </div>
    </div>
  </div>
    </>
)
export default UsuariosADM