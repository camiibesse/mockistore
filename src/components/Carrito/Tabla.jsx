import "./Tabla.css";

export const Tabla = (props) => {
  const { carrito, borrarID, incrementarCantID, decrementarCantID } = props;

  return (
    <div className="container">
      <table className="table-responsive">
        <thead>
          <tr>
            <th>#</th>
            <th>nombre</th>
            <th>precio</th>
            <th>marca</th>
            <th>foto</th>
            <th>cantidad</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((producto, index) => (
            <tr key={index}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>${producto.precio}</td>
              <td>{producto.marca}</td>
              <td>
                <img
                  width="100px"
                  src={producto.foto}
                  alt={"foto de " + producto.nombre}
                />
              </td>
              <td>
                {producto.cantidad}
                <img
                  className="btn-subtract"
                  src="menos.png"
                  alt=""
                  onClick={() => decrementarCantID(producto.id)}
                />

                <img
                  className="btn-add"
                  src="add.png"
                  alt="agregar producto"
                  onClick={() => incrementarCantID(producto.id)}
                />
              </td>
              <td>
                <img
                  className="btn-eliminar"
                  src="eliminar.png"
                  alt="elminar producto"
                  onClick={() => borrarID(producto.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
