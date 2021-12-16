//import Navbar from './ciclo4/components/shared/Navbar';
//import Perfil from '../shared/Perfil';
const ProductosADM = () => (
    <>
<div class="container">
		<div class="row">
			<div class="col-md-10">
				<h1>Productos</h1>
			</div>
			<div class="col-md-2">
				<button id="crearProducto" type="button" class="btn btn-primary" data-bs-toggle="modal"
					data-bs-target="#modalProducto">
					Crear producto
				</button>
			</div>
		</div>
		<div class="row">
			<table class="table">

			</table>
		</div>

	</div>


	<div class="modal fade" id="modalProducto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Producto</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form id="login-form" class="form row g-2" action="" method="post">
						<div class="col-md-6">
							<label for="reference" class="p3">Referencia:</label>
							<input type="text" name="reference" id="reference" class="form-control"/>
						</div>
						<div class="col-md-6">
							<label for="category" class="p3">Categoría:</label>
							<input type="text" name="category" id="category" class="form-control" required maxlength="80" />
						</div>
						<div class="col-md-6">
							<label for="price" class="p3">Precio:</label>
							<input type="number" name="price" id="price" class="form-control" required maxlength="80" />
						</div>
						<div class="col-md-6">
							<label for="" class="p3">Disponibilidad:</label>
							<br/>
							<div class="form-check form-check-inline">
								<input class="form-check-input" type="radio" name="radioDisponibilidad" id="radioDisponibilidadSi" checked/>
								<label class="form-check-label" for="radioDisponibilidadSi">
									Sí
								</label>
							</div>
							<div class="form-check form-check-inline">
								<input class="form-check-input" type="radio" name="radioDisponibilidad" id="radioDisponibilidadNo"/>
								<label class="form-check-label" for="radioDisponibilidadNo">
									No
								</label>
							</div>

						</div>
						<div class="col-md-6">
							<label for="description" class="p3">Descripción:</label>
							<input type="text" name="description" id="description" class="form-control" required maxlength="80" />
						</div>
						<div class="col-md-6">
							<label for="quantity" class="p3">Cantidad:</label>
							<input type="number" name="quantity" id="quantity" class="form-control" />
						</div>
						<div class="col-md-12">
							<label for="photo" class="p3">Foto (enlace):</label>
							<input type="text" name="photo" id="photo" class="form-control" />
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
export default ProductosADM