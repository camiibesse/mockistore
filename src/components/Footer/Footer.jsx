import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-content-container">
            <h3 className="website-logo">Mocki Store</h3>
            <span className="footer-info">1156479521</span>
            <span className="footer-info">mockistore@mocki.com</span>
          </div>
          <div className="footer-menus">
            <div className="footer-content-container">
              <ul className="menu-title">
                <li className="menu-item-footer">Inicio</li> 
                <li className="menu-item-footer">Nosotros</li>
                <li className="menu-item-footer">Alta</li>
                <li className="menu-item-footer">Contacto</li>
              </ul>
            </div>
            <div className="footer-content-container">
              <span className="menu-title">legal</span>
              <p className="menu-item-footer">
              Política de privacidad
              </p>
              <p className="menu-item-footer">
                Cookies
              </p>
              <p className="menu-item-footer">
              Asesoría Legal
              </p>
            </div>
          </div>

          <div className="footer-content-container">
            <span className="menu-title">Seguinos en nuestras redes</span>
            <div className="social-container">
              <p className="social-link"></p>
              <p className="social-link"></p>
              <p className="social-link"></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
