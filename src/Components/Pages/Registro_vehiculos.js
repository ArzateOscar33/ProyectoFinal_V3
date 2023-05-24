import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import { app, basededatos } from '../../Firebase';
import Swal from 'sweetalert2';
import { onValue, ref, set, update } from 'firebase/database';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { database } from '../../Firebase';
import { useAuth } from '../../Context/authContext';
import './RegistroVehiculos.css';


const RegistroVehiculos = () => {
  const { user, logout, loading } = useAuth();
  const [vehiculo, setVehiculo] = useState({
    Matricula: '',
    Placas: '',
    Modelo: '',
    Marca: '',
    Tipo: 'Seleccionar'
  });

  const handleChange = ({ target: { name, value } }) => {
    setVehiculo({ ...vehiculo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { Matricula, Placas, Marca, Modelo, Tipo } = vehiculo;
    const vacios =
      Tipo === 'Seleccionar' || Placas === '' || Marca === '' || Modelo === '' || Matricula === '';

    if (!vacios) {
      update(ref(basededatos, 'Vehiculo/' + Matricula), vehiculo).then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Vehiculo Registrado',
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
//borrar inputs
document.getElementById("Matricula").value = "";

document.getElementById("Placas").value = "";

document.getElementById("Marca").value = "";

document.getElementById("Modelo").value = "";

document.getElementById("Tipo").value = "Seleccionar";


    setVehiculo({
      Matricula: '',
      Placas: '',
      Marca: '',
      Modelo: '',
      Tipo: 'Seleccionar'
    });
  };

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Placas" className="form-label">
            Placas
          </label>
          <input
            type="text"
            className="form-control"
            id="Placas"
            name="Placas"
            value={vehiculo.Placas}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Matricula" className="form-label">
            Matricula
          </label>
          <input
            type="text"
            className="form-control"
            id="Matricula"
            name="Matricula"
            value={vehiculo.Matricula}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Marca" className="form-label">
            Marca
          </label>
          <input
            type="text"
            className="form-control"
            id="Marca"
            name="Marca"
            value={vehiculo.Marca}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Modelo" className="form-label">
            Modelo
          </label>
          <input
            type="text"
            className="form-control"
            id="Modelo"
            name="Modelo"
            value={vehiculo.Modelo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Tipo" className="form-label">
            Tipo
          </label>
          <select
            className="form-control"
            id="Tipo"
            name="Tipo"
            value={vehiculo.Tipo}
            onChange={handleChange}
          >
            <option value="Seleccionar">Seleccionar</option>
            <option value="Sedan">Sedan</option>
            <option value="Pick-up">Pick-up</option>
            <option value="Deportivo">Deportivo</option>
            <option value="SUV">SUV</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar Vehiculo
        </button>
      </form>
    </div>
  );
};

export default RegistroVehiculos;
