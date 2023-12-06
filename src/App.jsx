import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import RutaNoValida from "./components/RutaNoValida";
import { Carrito } from "./components/Carrito/Carrito";
import { Inicio } from './components/Inicio/Inicio';
import Footer from "./components/Footer/Footer";
import Alta from "./components/Alta/Alta";
import Contacto from "./components/Contacto/Contacto";
import Nosotros from "./components/Nosotros/Nosotros";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route index element={<Inicio titulo="Inicio" />} />
          <Route path="inicio" element={<Inicio titulo="Inicio" />} /> 
          <Route path="alta" element={<Alta titulo="Alta" />} /> 
          <Route path="carrito" element={<Carrito titulo="Carrito" />} />
          <Route path="contacto" element={<Contacto titulo="Contacto" />} />
          <Route path="nosotros" element={<Nosotros titulo="Nosotros" />} />
          <Route path="*" element={<RutaNoValida />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
