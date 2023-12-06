import './Contacto.css';

const Contacto = () => {
  return (
    <div className="contenedor">
      <h1>Dejanos tu mensaje</h1>
      <div className="cont-form">
                <form className="form">
                    <div className="cont-input">
                        <input type="text" className="input" placeholder="Nombre" />
                    </div>
                    <div className="cont-input">
                        <input type="email" className="input" placeholder="Correo" />
                    </div>
                    <div className="cont-input">
                        <input type="text" className="input" placeholder="Asunto" />
                    </div>
                    <div className="cont-input">
                        <textarea className="textarea" placeholder="Mensaje"></textarea>
                    </div>
                    <div class="cont-btn">
                        <button class="btn" type="button">ENVIAR</button>
                    </div>
                </form>
    </div>
    </div>
  );
};

export default Contacto;
