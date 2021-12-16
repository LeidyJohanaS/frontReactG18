//import Navbar from './ciclo4/components/shared/Navbar';
//import Perfil from '../shared/Perfil';
import $ from "jquery";
import { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import ProductsTable from "../shared/ProductsTable";
import ProductsInOrderTable from "../shared/ProductsInOrderTable";
window.onload = function () {
  //cargarProductos();
  cargarFechaDeHoy();
};

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
const OrdenPedido = (props) => {
  let initialOrderState = {
    id: props.order ? props.order.id : "",
    registerDay: props.order ? props.order.registerDay : "",
    status: props.order ? props.order.status : "",
    products: props.order ? props.order.products : {},
  };
  if (props.order && props.order.id) {
    initialOrderState["id"] = props.order.id;
  }

  const [order, setOrder] = useState(initialOrderState);
  const [products, setProducts] = useState([]);
  const [productsInOrder, setProductsInOrder] = useState([]);

  useEffect(()=>{
        function getProducts(){
            ProductService.getAll().then((response)=>{
                setProducts(response.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
        getProducts();
  },[])
  return (
      <div className="container-fluid">
        <div className="row">
          <h1>Crear Pedidos</h1>
          <div className="col-sm-5">
            <h2>Información del pedido</h2>
            <form>
              <div className="mb-3">
                <label for="registerDay" className="form-label">
                  Fecha
                </label>
                <input
                  type="date"
                  name="registerDay"
                  className="form-control"
                  id="registerDay"
                  disabled
                />
              </div>
              <div className="mb-3">
                <button id="crearOrden" className="btn btn-primary">
                  Crear orden
                </button>
              </div>
            </form>
            <h2>Productos en la orden</h2>
            <ProductsInOrderTable products={productsInOrder}></ProductsInOrderTable>
          </div>
          <div className="col-sm-7 h-50">
            <h2>Lista de productos</h2>
            <ProductsTable products={products}></ProductsTable>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6"></div>
        </div>
      </div>
  );
};
export default OrdenPedido;
