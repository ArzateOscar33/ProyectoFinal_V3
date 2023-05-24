import React from 'react';

export const Contacto = () => {
  return (
    <div className="desarrolladores-container">
      <div className="desarrollador">
        <img src="./images/carlos.jpg" style={{ width: '10%', height: 'auto' }} />
        <div className="desarrollador-info">
          <h2>Sanchez Carlos Daniel</h2>
          <p>Programador de la página web</p>
          <div className="redes-sociales">
            <a className="bi bi-youtube" href="https://www.youtube.com/channel/UCZxw6sLNnDBPF9cu99BPxKw">Youtube</a>
            <a className="bi bi-facebook" href="https://www.facebook.com/carlosdpz/">Facebook</a>
            <a className="bi bi-github" href="https://github.com/carlossanchezPe">GitHub</a>
          </div>
        </div>
      </div>

      <div className="desarrollador">
        <img src="./images/arzate.jpg" style={{ width: '10%', height: 'auto' }} />
        <div className="desarrollador-info">
          <h2>Arzate Oscar</h2>
          <p>Programador de la página web</p>
          <div className="redes-sociales">
            <a className="bi bi-youtube" href="#">Youtube</a>
            <a className="bi bi-facebook" href="https://www.facebook.com/arzate.oscarg">Facebook</a>
            <a className="bi bi-github" href="https://github.com/ArzateOscar33">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
