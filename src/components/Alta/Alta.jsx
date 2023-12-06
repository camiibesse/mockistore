import React, { useState, useEffect } from "react";
import Nuevo from "./Nuevo";
import Tabla from "./Tabla";
import {
  actualizarProducto,
  borrarProducto,
  guardarProducto,
  obtenerProductos,
} from "../Servicios/productos";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Alta = () => {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    stock: "",
    marca: "",
    categoria: "",
    detalles: "",
    foto: "",
    envio: "",
  });
  const [editarID, setEditarID] = useState(null);
  const [borrarID, setBorrarID] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    async function pedir() {
      const productos = await obtenerProductos();
      setProductos(productos);
    }
    pedir();
  }, []);

  function onChange(e) {
    const { type, id, value, checked } = e.target;
    setProducto({ ...producto, [id]: type === "checkbox" ? checked : value });
  }

  function borrarFormulario() {
    setProducto({
      nombre: "",
      precio: "",
      stock: "",
      marca: "",
      categoria: "",
      detalles: "",
      foto: "",
      envio: "",
    });
  }

  function formInvalid() {
    const p = producto;
    const noValido =
      !/^[a-zA-Z]{3,}$/.test(p.nombre) ||
      !p.precio ||
      !p.stock ||
      !p.marca ||
      !p.categoria ||
      !p.detalles ||
      !p.foto;

    return noValido;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const productosClon = [...productos];

    if (!editarID) {
      const productoGuardado = await guardarProducto(producto);
      productosClon.push(productoGuardado);
    } else {
      const id = editarID;
      const productoActualizado = await actualizarProducto(id, producto);
      const index = productosClon.findIndex(
        (p) => p.id === productoActualizado.id
      );
      productosClon.splice(index, 1, producto);

      setEditarID(null);
    }
    setProductos(productosClon);

    borrarFormulario();
  }

  function editar(id) {
    console.log("editar", id);

    if (!editarID || editarID !== id) {
      setEditarID(id);
      setProducto(productos.find((p) => p.id === id));
    } else {
      setEditarID(null);
      borrarFormulario();
    }
  }

  function borrar(id) {
    console.log("borrar", id);

    if (id) {
      setBorrarID(id);
      handleShow();
    }
  }

  async function goBorrar() {
    const id = borrarID;

    if (id) {
      const productoEliminado = await borrarProducto(id);
      const productosClon = [...productos];
      const index = productosClon.findIndex(
        (p) => p.id === productoEliminado.id
      );
      productosClon.splice(index, 1);
      setProductos(productosClon);
    }
    handleClose();
  }
  return (
    <div>
      <div className="jumbotron">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Borrado de Producto</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            ¿Desea eliminar el producto de nombre{" "}
            {productos.find((p) => p.id === borrarID)?.nombre}?
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={goBorrar}>
              Aceptar
            </Button>
          </Modal.Footer>
        </Modal>
        <Nuevo
          producto={producto}
          onChange={onChange}
          onSubmit={onSubmit}
          editarID={editarID}
          invalid={formInvalid()}
        />
        <Tabla
          productos={productos}
          editar={editar}
          borrar={borrar}
          editarID={editarID}
        />
      </div>
    </div>
  );
};

export default Alta;
