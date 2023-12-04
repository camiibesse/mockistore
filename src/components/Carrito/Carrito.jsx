import "./Carrito.css";

import { Tabla } from "./Tabla";
import { useLocalStorage } from "../Hooks/useLocalStore";
import { enviarCarrito } from "../Servicios/carrito";


export function Carrito() {
  const [carrito, setCarrito] = useLocalStorage("carrito", []);

  function borrarAll() {
    setCarrito([]);
  }

  function borrarID(id) {
    const carritoClon = [...carrito];
    const index = carritoClon.findIndex((p) => p.id === id);
    carritoClon.splice(index, 1);
    setCarrito(carritoClon);
  }

  function incrementarCantID(id) {
    const carritoClon = [...carrito];
    const producto = carritoClon.find((p) => p.id === id);
    if (producto.cantidad < producto.stock) {
      producto.cantidad++;
      setCarrito(carritoClon);
    }
  }

  function decrementarCantID(id) {
    const carritoClon = [...carrito];
    const producto = carritoClon.find((p) => p.id === id);
    if (producto.cantidad > 1) {
      producto.cantidad--;
      setCarrito(carritoClon);
    }
  }

  async function pedir() {
    const carritoEnviado = await enviarCarrito(carrito);
    alert(`Muchas gracias por tu compra: ${JSON.stringify(carritoEnviado.name)}`)
    setCarrito([]);
  }

  return (
    <div className="carrito">
      <h1>Tus productos: </h1>
      {carrito.length === 0 && (
        <h3 className="container-items">El carrito está vacío</h3>
      )}
      {carrito.length > 0 && (
        <>
          
          <Tabla
            carrito={carrito}
            borrarID={borrarID}
            incrementarCantID={incrementarCantID}
            decrementarCantID={decrementarCantID}
          />
          <button className="carrito__pedir" onClick={pedir}>
            Comprar
          </button>
          <button className="vaciar_carrito" onClick={borrarAll}>
            Vaciar
          </button>
        </>
      )}
    </div>
  );
}
