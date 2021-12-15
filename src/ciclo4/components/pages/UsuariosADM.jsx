import Navbar from './ciclo4/components/shared/Navbar';
import Perfil from '../shared/Perfil';
const UsuariosADM = () => (
    <>
    <div class="container">
    <div class="row">
      <div class="col-md-10">
        <h1>Usuarios</h1>
      </div>
      <div class="col-md-2">
        <button id="registrarUsuario" type="button" class="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#modalUsuario">
          Registrar usuario
        </button>
      </div>
    </div>
    <div class="row">
      <table id="tablaUsuarios" class="table">

      </table>
    </div>

  </div>


  <div class="modal fade" id="modalUsuario" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Usuario</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="login-form" class="form row g-2" action="" method="post">
            <h3 class="p2 text-center">Registrar Usuario</h3>
            <div class="col-md-6">
              <label for="identification" class="p3">Identificacion:</label><br />
              <input type="number" name="identification" id="identification" class="form-control" required
                maxlength="80" />
            </div>
            <div class="col-md-6">
              <label for="name" class="p3">Nombre y apellido:</label><br />
              <input type="name" name="name" id="name" class="form-control" required maxlength="80" />
            </div>
            <div class="col-md-6">
              <label for="address" class="p3">Direccion:</label><br />
              <input type="text" name="address" id="address" class="form-control" required maxlength="80" />
            </div>
            <div class="col-md-6">
              <label for="cellphone" class="p3">Celular:</label><br />
              <input type="number" name="cellphone" id="cellphone" class="form-control" required maxlength="80" />
            </div>
            <div class="col-md-6">
              <label for="email" class="p3">E-mail:</label><br />
              <input type="text" name="email" id="email" class="form-control" required maxlength="50" />
              <span id="badEmail" class="badEmail" style="display:none"></span>
            </div>
            <div class="col-md-6">
              <label for="password" class="p3">Clave:</label><br />
              <input type="password" name="password" id="password" class="form-control" required maxlength="50" />
            </div>
            <div class="col-md-6">
              <label for="passwordrepeat" class="p3">Confirmar Clave:</label><br />
              <input type="password" name="passwordrepeat" id="passwordrepeat" class="form-control" required
                maxlength="50" />
            </div>
            <div class="col-md-6">
              <label for="zone" class="p3">Zona :</label><br />
              <input type="text" name="zone" id="zone" class="form-control" required maxlength="80" />
            </div>
            <div class="col-md-12">
              <label for="select" class="p3">Cargo</label>
              <select id="type" class="form-select" name="select">
                <option value="ADM" selected>Administrador</option>
                <option value="COORD">Coordinador de zona</option>
                <option value="ASE" selected>Asesor comercial</option>
              </select>
            </div>

          </form>
        </div>
        <div class="modal-footer">

        </div>
      </div>
    </div>
  </div>
    </>
)
export default UsuariosADM