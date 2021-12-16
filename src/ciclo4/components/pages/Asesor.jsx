//import Navbar from './ciclo4/components/shared/Navbar';
//import Perfil from "../shared/Perfil";
import { useEffect, useState } from "react";
import "../../styles/buttons.css";
//import { Table } from 'react-bootstrap';
//import $ from "jquery";
import OrderTableAssessor from "../shared/OrderTableAssessor";
import ChooseFilter from "../shared/ChooseFilter";
import OrderSelectFilter from '../shared/OrderSelectFilter'

const Asesor = function () {
  const [orders, setOrders] = useState([]);
  
  
  const[status,setStatus]=useState("none");
  useEffect(() => {
    console.log("estado=",status);
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10">
          <h1>Asesor Comercial</h1>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary">Crear Pedido</button>
        </div>
      </div>
      <div className="col-md-10">
        <h2>Tus pedidos</h2>
        <ChooseFilter setStatus={setStatus}></ChooseFilter>
        <OrderSelectFilter></OrderSelectFilter>
      </div>
      <div className="row">
          <OrderTableAssessor orders={orders}/>
      </div>
    </div>
  );
};

export default Asesor;
