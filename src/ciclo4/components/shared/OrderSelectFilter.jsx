import React from "react";
class OrderSelectFilter extends React.Component {
  render() {
    let el;
    switch (this.props.filter) {
    case "none":
    case "":
        el = <></>;
        break;
    case "date":
        el = <input type="date" name="" id="orderDate" />;
        break;
    case "status":
        el = (
          <select name="" id="status">
            <option disabled>Seleccione el estado</option>
            <option value="approved">Aprobada</option>
            <option value="rejected">Rechazada</option>
            <option value="pending">Pendiente</option>
          </select>
        );
        break;
    default:
            el=<></>
    return el;
    }
  }
}
export default OrderSelectFilter;