//import {useState} from 'react'
import React from "react";
class OrderTableAssessor extends React.Component {
    render() {
    const orders = this.props.theOrders;
    console.log(orders, "ordenes");
    return (
        <table className="table table-bordered border-dark scroll-area">
        <thead>
            <tr>
            <th>#</th>
            <th>Fecha del pedido</th>
            <th>Estado</th>
            <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {orders.length > 0 ? (
            orders.map((order, index) => (
                <tr key={index}>
                <td>{order.id}</td>
                <td>{order.registerDay}</td>
                <td>{order.status}</td>
                <td>
                    <button className="btn btn-primary">Ver orden</button>
                </td>
                </tr>
            ))
            ) : (
            <tr key="0">
                <td colSpan={4}>No hay órdenes para mostrar.</td>
            </tr>
            )}
        </tbody>
        </table>
    );
    }
}
export default OrderTableAssessor;
