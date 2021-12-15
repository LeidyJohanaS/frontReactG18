import Navbar from './ciclo4/components/shared/Navbar';
import Perfil from '../shared/Perfil';
const CoorZona = () => (
    <>
<div class="container">
		<div class="row">
			<div class="col-md-10">
				<h1>Orden</h1>
			</div>
		</div>
		<div class="row">
			<table  id="tablaOrdenes" class="table">

			</table>
		</div>

	</div>


	<div class="modal fade " id="modalOrden" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-fullscreen">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Detalle Orden</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">

                    <table id="tablaProductos" class="table table-dark">
					    
                    </table>
                    
                    <h5 class="title" >Orden Pedido</h5>
                        <table id="tablapedido" class="table table-dark">
							
						</table>
                        <div class="col-md-6">
							<label for="" class="p3">Estado:</label>
							<br/>
							<div class="form-check form-check-inline">
								<input class="form-check-input" type="radio" name="radioEstado" id="radioOrdenaprobada" checked/>
								<label class="form-check-label" for="#radioOrdenaprobada">
									Aprobado
								</label>
							</div>
							<div class="form-check form-check-inline">
								<input class="form-check-input" type="radio" name="radioEstado" id="radioOidenrechazada"/>
								<label class="form-check-label" for="radioOidenrechazada">
									Rechazado
								</label>
							</div>

						</div>
				</div>
				<div class="modal-footer">
					<button class="btn btn-primary" id="actualizarOrden">Actualizar</button>
					<button class="btn btn-primary" id="cerrarModal" data-bs-dismiss="modal" >Cerrar</button>
				</div>
			</div>
		</div>
	</div>
    </>
    )
    export default CoorZona
