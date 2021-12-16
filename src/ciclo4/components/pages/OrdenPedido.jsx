//import Navbar from './ciclo4/components/shared/Navbar';
//import Perfil from '../shared/Perfil';
import $ from 'jquery'
window.onload=(function () {
    //cargarProductos();
    cargarFechaDeHoy();
  });

  //var orden;
  function cargarFechaDeHoy() {
    let date = new Date();
  
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
  
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
  
    let today = year + "-" + month + "-" + day;
    $("#registerDay").val(today);
  }
const OrdenPedido = () => (
    <>
<div className="container-fluid">
        <div className="row">
            <h1>Crear Pedidos</h1>
            <div className="col-sm-5">
                <h2>Información del pedido</h2>
                <form>
                    <div className="mb-3">
                        <label for="registerDay" className="form-label">Fecha</label>
                        <input type="date" name="registerDay" className="form-control" id="registerDay" disabled/>
                    </div>
                    <div className="mb-3">
                        <button id="crearOrden" className="btn btn-primary">Crear orden</button>
                    </div>
                </form>
                <h2>Productos en la orden</h2>
                <table id="tablaProductosEnOrden" className="table table-bordered border-dark">
                    <thead>
                        <th>Referencia</th>
                        <th>Precio unitario</th>
                        <th>Cantidad</th>
                        <th></th>
                    </thead>
                    <tbody id="bodyTablaProductosEnOrden">
                        
                    </tbody>
                </table>
            </div>
            <div className="col-sm-7 h-50">
                <h2>Lista de productos</h2>
                <table id="tablaProductos" className="table table-bordered border-dark scroll-area">

                </table>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
               
            </div>

        </div>
    </div>
    </>
)
export default OrdenPedido