import React from 'react';
import { useState } from 'react';
import { useAuth } from '../../Context/authContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = user;
    const vacios = email.length === 0 || password === 0;
    if (!vacios) {
      login(user.email, user.password);
      navigate('/');
    } else {
      // Aquí puedes agregar una lógica para manejar campos vacíos
    }
  };

  const handleCreateAccount = () => {
    navigate('/Registro');
  };

  const handleLoginWithGoogle = () => {
    // Lógica para iniciar sesión con Google
  };

  const handleLoginWithFacebook = () => {
    // Lógica para iniciar sesión con Facebook
  };

  return (
    <div className="container bg-gray">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <div className="text-center mb-4">
              <img src="./images/fotodeperfil.png" style={{ width: '70%', height: 'auto' }} />
              </div>
              <h3 className="card-title mb-4">Iniciar sesión</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-light">Ingresar</button>
                  <button type="button" className="btn btn-link text-white" onClick={handleCreateAccount}>¿No tienes una cuenta? Crea una aquí</button>
                  <div className="text-center">
                    <span>Ingresar con:</span>
                    <button type="button" className="btn btn-outline-light mx-2" onClick={handleLoginWithGoogle}>
                      <i className="bi bi-google"></i> Google
                    </button>
                    <button type="button" className="btn btn-outline-light" onClick={handleLoginWithFacebook}>
                      <i className="bi bi-facebook"></i> Facebook
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
