import Navbar from './ciclo4/components/shared/Navbar';
import Perfil from '../shared/Perfil';
const Main = () => (
    <section class="row p-4">
      <div class="row mt-5">
        <div class="container-fluid">
          <div class="row center">
            <div class="col-md-6 card-deck">

              <a href="UsuariosADM.html">
                <div class="card p2 text-center bg-secondary mb-3">
                  <img class="card-img-top" src="usuarios.jpeg" alt="Card image cap"/>
                  <div class="card-body">
                    <a href="UsuariosADM.html" class="btn btn-dark">Usuarios</a>
                  </div>
                </div>
              </a>
            </div>
            <div class="col-md-6 ">
              <a href="productosADM.html">
                <div class="card p2 text-center bg-secondary mb-3">
                  <img class="card-img-top" src="productos.jpeg" alt="Card image cap"/>
                  <div class="card-body">
                    <a href="productosADM.html" class="btn btn-dark">Productos</a>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
)
export default Main