
import { NavLink } from "react-router-dom";
import "./Navbar.css";


export const Navbar = () => {
  return (
    <nav>
      <h1>Mocki Store</h1>
      <ul className="container-icon">
        <li>
          <NavLink className="nav-link" to="/inicio">
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/alta">
            Alta
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/nosotros">
            Nosotros
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contacto">
            Contacto
          </NavLink>
        </li>
        <li>
        <NavLink className="nav-link" to="/carrito">
            <img src="/carrito.png" alt="carrito" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
