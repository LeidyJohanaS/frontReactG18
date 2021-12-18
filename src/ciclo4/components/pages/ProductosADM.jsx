//import Navbar from './ciclo4/components/shared/Navbar';

import { useState } from "react";
import ProductService from "../../services/ProductService";
import { Button, Modal } from "react-bootstrap";
import React from "react";

//import Perfil from '../shared/Perfil';
const ProductosADM = () => {
  const [products, setProducts] = useState([]);
  ProductService.getAll()
    .then((response) => {
      setProducts(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h1>Productos</h1>
          </div>
          <div className="col-md-2">
            <ModalProduct title="Crear Producto"></ModalProduct>
          </div>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th>Refrencia</th>
                <th>Categoría</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Foto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.reference}</td>
                  <td>{product.category}</td>
                  <td>{product.description}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <img src={product.photography} alt={product.reference} />
                  </td>
                  <td>
                    <button className="btn btn-primary">Editar producto</button>
                    <button className="btn btn-secondary">
                      Eliminar producto
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalProducto"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Producto
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                id="login-form"
                className="form row g-2"
                action=""
                method="post"
              >
                <div className="col-md-6">
                  <label htmlFor="reference" className="p3">
                    Referencia:
                  </label>
                  <input
                    type="text"
                    name="reference"
                    id="reference"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="category" className="p3">
                    Categoría:
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    className="form-control"
                    required
                    maxLength="80"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="price" className="p3">
                    Precio:
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                    required
                    maxLength="80"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="" className="p3">
                    Disponibilidad:
                  </label>
                  <br />
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioDisponibilidad"
                      id="radioDisponibilidadSi"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radioDisponibilidadSi"
                    >
                      Sí
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioDisponibilidad"
                      id="radioDisponibilidadNo"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radioDisponibilidadNo"
                    >
                      No
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="description" className="p3">
                    Descripción:
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="form-control"
                    required
                    maxLength="80"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="quantity" className="p3">
                    Cantidad:
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="photo" className="p3">
                    Foto (enlace):
                  </label>
                  <input
                    type="text"
                    name="photo"
                    id="photo"
                    className="form-control"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductosADM;

class ModalProduct extends React.Component {
  state = {
    show: false,
    product: {
      reference: this.props.product ? this.props.product.reference : "",
      category: this.props.product ? this.props.product.category : "",
      availability: this.props.product ? this.props.product.availability : true,
      price: this.props.product ? this.props.product.price : 0,
      quantity: this.props.product ? this.props.product.quantity : 0,
      photography: this.props.product ? this.props.product.photography : "",
    },
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });
  handleReference(e){
	let reference = e.target.value;
	let newProduct = this.state.product;
	newProduct.reference=reference
	this.setState({product:newProduct})
  }
  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          {this.props.title}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              id="login-form"
              className="form row g-2"
              action=""
              method="post"
            >
              <div className="col-md-6">
                <label htmlFor="reference" className="p3">
                  Referencia:
                </label>
                <input
                  type="text"
                  name="reference"
                  id="reference"
                  className="form-control"
				  onChange={(e)=>this.handleReference(e)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="category" className="p3">
                  Categoría:
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="form-control"
                  required
                  maxLength="80"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="price" className="p3">
                  Precio:
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="form-control"
                  required
                  maxLength="80"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="" className="p3">
                  Disponibilidad:
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioDisponibilidad"
                    id="radioDisponibilidadSi"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="radioDisponibilidadSi"
                  >
                    Sí
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="radioDisponibilidad"
                    id="radioDisponibilidadNo"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="radioDisponibilidadNo"
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="description" className="p3">
                  Descripción:
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="form-control"
                  required
                  maxLength="80"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="quantity" className="p3">
                  Cantidad:
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="form-control"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="photo" className="p3">
                  Foto (enlace):
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  className="form-control"
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              {this.props.title}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
