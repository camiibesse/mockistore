import React from "react";

const Nuevo = ({ nombre, precio, stock, marca, categoria, detalles, foto, envio,onChange, onSubmit, editarID }) => {
  return (
    <div className="Ingreso">
      <form onSubmit={onSubmit}>
        {/* ------- Campo nombre ------- */}
        <div className="form-group">
          <label htmlFor="nombre">nombre</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            value={nombre}
            onChange={onChange}
          />
        </div>

        {/* ------- Campo precio ------- */}
        <div className="form-group">
          <label htmlFor="precio">precio</label>
          <input
            type="number"
            id="precio"
            className="form-control"
            value={precio}
            onChange={onChange}
          />
        </div>

        {/* ------- Campo stock ------- */}
        <div className="form-group">
          <label htmlFor="stock">stock</label>
          <input
            type="number"
            id="stock"
            className="form-control"
            value={stock}
            onChange={onChange}
          />
        </div>

        {/* ------- Campo marca ------- */}
        <div className="form-group">
          <label htmlFor="marca">marca</label>
          <input
            type="text"
            id="marca"
            className="form-control"
            value={marca}
            onChange={onChange}
          />
        </div>

        {/* ------- Campo categoria ------- */}
        <div className="form-group">
          <label htmlFor="categoria">categoria</label>
          <input
            type="text"
            id="categoria"
            className="form-control"
            value={categoria}
            onChange={onChange}
          />
        </div>

        {/* ------- Campo detalles ------- */}
        <div className="form-group">
          <label htmlFor="detalles">detalles</label>
          <input
            type="text"
            id="detalles"
            className="form-control"
            value={detalles}
            onChange={onChange}
          />
        </div>

        {/* ------- Campo foto ------- */}
        <div className="form-group">
          <label htmlFor="foto">foto</label>
          <input
            type="text"
            id="foto"
            className="form-control"
            value={foto}
            onChange={onChange}
          />
        </div>

        {/* ------- Campo envio ------- */}
        <div className="form-group form-check">
          <input
            type="checkbox"
            id="envio"
            className="form-check-input"
            checked={envio}
            onChange={onChange}
          />
          <label htmlFor="envio">envio</label>
        </div>

        {/* ----- botón de envío ------ */}
        <button
          
          className={`btn btn-${editarID ? "warning" : "success"} mt-3 mb-5`}
        >
          {editarID ? "Actualizar" : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default Nuevo;
