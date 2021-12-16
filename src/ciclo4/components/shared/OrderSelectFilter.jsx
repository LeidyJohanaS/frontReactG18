import React from "react";
import { Form } from "react-bootstrap";
//import OrderService from "../../services/OrderService";

// function filtrarPorEstado(e) {
//   console.log("Por estado", e);
// }

// function filtrarPorFecha(e) {
//   console.log("Por fecha", e);
// }

function aplicarFiltroEstado() {
  let estado = document.getElementById("status");
  let valor = estado.value;
  console.log(valor);
}
class OrderSelectFilter extends React.Component {

  render() {
    console.log("filter", this.props.filter);
    switch (this.props.filter) {
      case "none":
      case "":
        return <></>;
      case "date":
        return (
          <>
            <label htmlFor="orderDate">Seleccione una fecha para filtrar</label>
            <input
              className="form-control"
              type="date"
              name="orderDate"
              id="orderDate"
            />
          </>
        );
      case "status":
        return (
          <>
            <label htmlFor="theStatus">Seleccione el estado de la orden</label>
            <Form.Select
              onChange={aplicarFiltroEstado}
              name="theStatus"
              id="status"
              className=""
            >
              <option disabled>Seleccione el estado</option>
              <option value="approved">Aprobada</option>
              <option value="rejected">Rechazada</option>
              <option value="pending">Pendiente</option>
            </Form.Select>
          </>
        );
      default:
        return <></>;
    }
  }
}
export default OrderSelectFilter;
