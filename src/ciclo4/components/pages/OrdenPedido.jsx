import Navbar from './ciclo4/components/shared/Navbar';
import Perfil from '../shared/Perfil';
const OrdenPedido = () => (
    <>
<div class="container-fluid">
        <div class="row">
            <h1>Crear Pedidos</h1>
            <div class="col-sm-5">
                <h2>Información del pedido</h2>
                <form>
                    <div class="mb-3">
                        <label for="registerDay" class="form-label">Fecha</label>
                        <input type="date" name="registerDay" class="form-control" id="registerDay" disabled/>
                    </div>
                    <div class="mb-3">
                        <button id="crearOrden" class="btn btn-primary">Crear orden</button>
                    </div>
                </form>
                <h2>Productos en la orden</h2>
                <table id="tablaProductosEnOrden" class="table table-bordered border-dark">
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
            <div class="col-sm-7 h-50">
                <h2>Lista de productos</h2>
                <table id="tablaProductos" class="table table-bordered border-dark scroll-area">

                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
               
            </div>

        </div>
    </div>
    </>
)
export default OrdenPedido