import { Form } from "react-bootstrap";

function cambiarEstado(e){
    console.log(e)
}
function ChooseFilter({ setStatus }) {
  let el = (
    <>
      <label htmlFor="selectStatus">Seleccione un filtro</label>
      <Form.Select
        onChange={cambiarEstado}
        aria-label="Default select example"
        key="filterSelect"
        name="selectStatus"
      >
        <option value="">Seleccione el filtro de búsqueda</option>
        <option value="status">Por estado</option>
        <option value="date">Por fecha</option>
        <option value="none">Ninguno</option>
      </Form.Select>
    </>
  );
  return el;
}
export default ChooseFilter;
