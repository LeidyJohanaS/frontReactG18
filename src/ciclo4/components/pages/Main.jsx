//import Navbar from './ciclo4/components/shared/Navbar';
//import Perfil from '../shared/Perfil';
const Main = () => (
    <section className="row p-4">
      <div className="row mt-5">
        <div className="container-fluid">
          <div className="row center">
            <div className="col-md-6 card-deck">

              <a href="UsuariosADM.html">
                <div className="card p2 text-center bg-secondary mb-3">
                  <img className="card-img-top" src="usuarios.jpeg" alt="Card cap"/>
                  <div className="card-body">
                    <a href="UsuariosADM.html" className="btn btn-dark">Usuarios</a>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6 ">
              <a href="productosADM.html">
                <div className="card p2 text-center bg-secondary mb-3">
                  <img className="card-img-top" src="productos.jpeg" alt="Card cap"/>
                  <div className="card-body">
                    <a href="productosADM.html" className="btn btn-dark">Productos</a>
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