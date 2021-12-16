//import Navbar from './ciclo4/components/shared/Navbar';
//import Perfil from '../shared/Perfil';
const ProductosADM = () => (
    <>
<div className="container">
		<div className="row">
			<div className="col-md-10">
				<h1>Productos</h1>
			</div>
			<div className="col-md-2">
				<button id="crearProducto" type="button" className="btn btn-primary" data-bs-toggle="modal"
					data-bs-target="#modalProducto">
					Crear producto
				</button>
			</div>
		</div>
		<div className="row">
			<table className="table">

			</table>
		</div>

	</div>


	<div className="modal fade" id="modalProducto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title" id="exampleModalLabel">Producto</h5>
					<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div className="modal-body">
					<form id="login-form" className="form row g-2" action="" method="post">
						<div className="col-md-6">
							<label for="reference" className="p3">Referencia:</label>
							<input type="text" name="reference" id="reference" className="form-control"/>
						</div>
						<div className="col-md-6">
							<label for="category" className="p3">Categoría:</label>
							<input type="text" name="category" id="category" className="form-control" required maxLength="80" />
						</div>
						<div className="col-md-6">
							<label for="price" className="p3">Precio:</label>
							<input type="number" name="price" id="price" className="form-control" required maxLength="80" />
						</div>
						<div className="col-md-6">
							<label for="" className="p3">Disponibilidad:</label>
							<br/>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="radioDisponibilidad" id="radioDisponibilidadSi" checked/>
								<label className="form-check-label" for="radioDisponibilidadSi">
									Sí
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input className="form-check-input" type="radio" name="radioDisponibilidad" id="radioDisponibilidadNo"/>
								<label className="form-check-label" for="radioDisponibilidadNo">
									No
								</label>
							</div>

						</div>
						<div className="col-md-6">
							<label for="description" className="p3">Descripción:</label>
							<input type="text" name="description" id="description" className="form-control" required maxLength="80" />
						</div>
						<div className="col-md-6">
							<label for="quantity" className="p3">Cantidad:</label>
							<input type="number" name="quantity" id="quantity" className="form-control" />
						</div>
						<div className="col-md-12">
							<label for="photo" className="p3">Foto (enlace):</label>
							<input type="text" name="photo" id="photo" className="form-control" />
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
export default ProductosADM