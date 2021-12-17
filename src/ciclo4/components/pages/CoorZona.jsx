import Navbar from '../shared/Navbar';
const CoorZona = () => {
	let options = [
		{
			name: "Inicio",
			url: "/Index"
		},
		{
			name: "Coordinador de Zona",
			url: "/CoorZona"
		},
		{
			name: "DetallesCoorZona",
			url: "/DetallesCoorZona"
		},
	]
	return (<>
		<Navbar menu={options}>

		</Navbar>
		<div className="container">
			<div className="row">
				<div className="col-md-10">
					<h1>Orden</h1>
				</div>
			</div>
			<div className="row">
				<table id="tablaOrdenes" className="table">

				</table>
			</div>

		</div>


		<div className="modal fade " id="modalOrden" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-fullscreen">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">Detalle Orden</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">

						<table id="tablaProductos" className="table table-dark">

						</table>

						<h5 className="title" >Orden Pedido</h5>
						<table id="tablapedido" className="table table-dark">

						</table>
						<div className="col-md-6">
							<label for="" className="p3">Estado:</label>
							<br />
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="radioEstado" id="radioOrdenaprobada" checked />
								<label className="form-check-label" for="#radioOrdenaprobada">
									Aprobado
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="radioEstado" id="radioOidenrechazada" />
								<label className="form-check-label" for="radioOidenrechazada">
									Rechazado
								</label>
							</div>

						</div>
					</div>
					<div className="modal-footer">
						<button className="btn btn-primary" id="actualizarOrden">Actualizar</button>
						<button className="btn btn-primary" id="cerrarModal" data-bs-dismiss="modal" >Cerrar</button>
					</div>
				</div>
			</div>
		</div>
	</>
	);
}
export default CoorZona
