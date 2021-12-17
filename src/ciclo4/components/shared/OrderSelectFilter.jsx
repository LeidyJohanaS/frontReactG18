import React from "react";
import { Form } from "react-bootstrap";
//import $ from 'jquery'
import OrderService from "../../services/OrderService";

function filtrarPorEstado(e) {
  console.log("Por estado", e);
}

function aplicarFiltroEstado() {
  let estado = document.getElementById("status");
  let valor = estado.value;
  console.log(valor);
}
class OrderSelectFilter extends React.Component {
  state={
    user: JSON.parse(sessionStorage.getItem("user"))
  }
  aplicarFiltroFecha(e){
    const getOrdersByDate = () => {
      OrderService.findBySalesmanAndDate(this.state.user.id,e.target.value)
      .then((response) => {      
          console.log("Respuesta", response);
          this.props.setOrders(response.data);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    };
    getOrdersByDate();
  }
  aplicarFiltroEstado(e){
    const getOrdersByState = () => {
      OrderService.findBySalesmanAndState(this.state.user.id,e.target.value)
      .then((response) => {      
          console.log("Respuesta", response);
          this.props.setOrders(response.data);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    };
    getOrdersByState();
  }
  componentDidMount() {
    const getOrders = () => {
        OrderService.findBySalesman(this.state.user.id)
        .then((response) => {      
            console.log("Respuesta", response);
            this.props.setOrders(response.data);
          })
          .catch((err) => {
            console.log("Error", err);
          });
      };
      getOrders();
  }
  
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
              onChange={(e)=>this.aplicarFiltroFecha(e)}
            />
          </>
        );
      case "status":
        return (
          <>
            <label htmlFor="theStatus">Seleccione el estado de la orden</label>
            <Form.Select
              onChange={(e)=>this.aplicarFiltroEstado(e)}
              name="theStatus"
              id="status"
              className=""
            >
              <option disabled>Seleccione el estado</option>
              <option value="Aprobada">Aprobada</option>
              <option value="Rechazada">Rechazada</option>
              <option value="Pendiente">Pendiente</option>
            </Form.Select>
          </>
        );
      default:
        return <></>;
    }
  }
}


  //let value= $("#status")

export default OrderSelectFilter;

