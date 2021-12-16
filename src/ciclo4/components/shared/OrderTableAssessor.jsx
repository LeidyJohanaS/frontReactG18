//import OrderService from '../../services/OrderService'
//import {useState} from 'react'
function OrderTableAssessor(props) {
  const orders = props.orders;
  return (
    <table className="table table-bordered border-dark scroll-area">
      <thead>
        <tr>
          <th>Fecha del pedido</th>
          <th>#</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => {
          <tr key={index}>
            <td>{order.date}</td>
            <td>{order.id}</td>
            <td>{order.status}</td>
            <td><button className="btn btn-primary">Ver orden</button></td>
          </tr>;
        })}
      </tbody>
    </table>
  );
}

export default OrderTableAssessor;
