import { useEffect, useState } from "react";
import { obtenerProductos }  from "../Servicios/productos";
import { Card } from "./Card";
import { useLocalStorage } from '../Hooks/useLocalStore'
import './Inicio.css'

export function Inicio() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useLocalStorage('carrito', [])


  useEffect(() => {
    async function pedir() {
      const productos = await obtenerProductos();
      setProductos(productos);
    }
    pedir()
  }, []);

  function agregarCarritoID(id) {
    alert("Producto agregado al carrito")

    const producto = productos.find((p) => p.id === id);
    console.log(producto);

    const carritoClon = [...carrito];

    let pC = carritoClon.find((prodC) => prodC.id === producto.id);
    if (!pC) {
      producto.cantidad = 1;
      carritoClon.push(producto);
    } else {
      pC.cantidad++;
    }
    setCarrito(carritoClon);
  }

  return (
    <>
      <h1>Listado de productos</h1>      
      <div className="container-items">
        {productos.map((producto, index) => (
          <Card
            key={index}
            producto={producto}
            agregarCarritoID={agregarCarritoID}
          />
        ))}
      </div>
    </>
  );
}
