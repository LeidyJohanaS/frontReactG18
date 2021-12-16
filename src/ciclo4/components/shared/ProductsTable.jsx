function ProductsTable(props) {
    const products = props.products;
  return (
    <>
      <table
        id="tablaProductos"
        className="table table-bordered border-dark scroll-area"
      >
          <thead>
              <tr>
                  <th>Referencia</th>
                  <th>Categoría</th>
                  <th>Descripción</th>
                  <th>Precio</th>
                  <th>Imagen</th>
                  <th>Acciones</th>
              </tr>
          </thead>
          <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
                <tr key={index}>
                <td>{product.reference}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td><img src={product.photography} alt={product.reference} width={10} height={10}/></td>
                <td>
                    <button className="btn btn-primary">Agregar a la orden</button>
                </td>
                </tr>
            ))
            ) : (
            <tr key="0">
                <td colSpan={4}>No hay productos para mostrar.</td>
            </tr>
            )}
          </tbody>
      </table>
    </>
  );
}

export default ProductsTable;
