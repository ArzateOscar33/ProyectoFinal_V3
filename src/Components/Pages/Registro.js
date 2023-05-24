import React, { useState } from 'react';
import { useAuth } from '../../Context/authContext';
import { useNavigate } from 'react-router-dom';
import { update, ref } from 'firebase/database';
import Swal from 'sweetalert2';
import { basededatos } from '../../Firebase';

export const Registro = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [user, setUser] = useState({
    Matricula: '',
    Apellido_P: '',
    Apellido_M: '',
    Nombre: '',
    email: '',
    password: '',
    Estado: '',
    Rol: 'Estudiante',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Matricula, Apellido_P, Apellido_M, Nombre, email, password, Estado, Rol } = user;
    const vacios = (Matricula === '' || Apellido_P === '' || Nombre === '' || Apellido_M === '' || email === '' || password === '' || Estado === 'Seleccionar');
    if (!vacios) {
      await signup(user.email, user.password);
      update(ref(basededatos, 'Usuarios/' + Matricula), user).then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario agregado',
          showConfirmButton: false,
          timer: 1500
        });
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Ingrese todos los datos',
        showConfirmButton: false,
        timer: 1500
      });
    }

    //Limpiar inputs
    document.getElementById("Matricula").value = "";

    document.getElementById("Apellido_P").value = "";
  
    document.getElementById("Apellido_M").value = "";
  
    document.getElementById("Nombre").value = "";
   
    document.getElementById("Estado").value = "Seleccionar";

    document.getElementById("email").value = "";

    document.getElementById("password").value = "";

  };

  return (
    <div className="form-container mt-5">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2 className="form-title">Registro de Usuario</h2>

        <div className="form-group">
          <label htmlFor="Matricula" className="form-label">Matrícula</label>
          <input type="text" className="form-control" id="Matricula" name="Matricula" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="Apellido_P" className="form-label">Apellido Paterno</label>
          <input type="text" className="form-control" id="Apellido_P" name="Apellido_P" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="Apellido_M" className="form-label">Apellido Materno</label>
          <input type="text" className="form-control" id="Apellido_M" name="Apellido_M" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="Nombre" className="form-label">Nombres</label>
          <input type="text" className="form-control" id="Nombre" name="Nombre" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="Estado" className="form-label">Estado</label>
          <select className="form-control" id="Estado" name="Estado" onChange={handleChange}>
            <option defaultValue>Seleccionar</option>
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input type="email" className="form-control" id="email" name="email" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" name="password" onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">Registrarme</button>
      </form>
    </div>
  );
};

export default Registro;
