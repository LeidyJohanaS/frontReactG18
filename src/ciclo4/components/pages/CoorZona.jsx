import Form from 'react-bootstrap/Form'
import React, { useState } from "react";
import {
  Button,
  Modal,
  Col,
  Row,
} from "react-bootstrap";

function CoorZona() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h1>Orden</h1>
          </div>
        </div>
        <table className="table table-bordered border-dark scroll-area">
        <thead>
          <tr>
            <th>#</th>
            <th>Fecha del pedido</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
          <Button variant="primary" onClick={handleShow}>
                Detalle Orden
              </Button>
        </thead>
      
               
      </table>
        </div>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Orden Pedido</h4>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Estado:
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Aprobado"
                  name="formHorizontalOrden"
                  id="radioOrdenaprobada"
                />
                <Form.Check
                  type="radio"
                  label="Rechazado"
                  name="formHorizontalOrden"
                  id="radioOrdenrechazada"
                />
              </Col>
            </Form.Group>
          </fieldset>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Actualizar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CoorZona;

