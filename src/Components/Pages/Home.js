import React from 'react';
import Carrusel from '../Carrusel';
import Footer from '../Footer/Footer';
import { useAuth } from '../../Context/authContext';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login'); // Redirige al usuario a la página de inicio de sesión después de cerrar sesión
  };

  return (
    <div className="home-container">
      <Carrusel />

      <div className="home-content">
        <h1 className="home-title">ESTACIONAMIENTO</h1>
        <h2 className="home-subtitle">Bienvenido {user.email}</h2>
        <h3 className="home-texto">Pagina dedicada a proporcionar un lugar de estacionamiento</h3>
        <h3 className="home-texto">A continuacion podras elegir una de nuestros enlaces</h3>
        
        <h4 className="home-subtexto">Instrucciones </h4>
        <h4 className="home-subtexto">La aplicación es un sistema de control de estacionamiento para el </h4>
        <h4 className="home-subtexto">Instituto Tecnológico de Tijuana. Permite a los alumnos registrar sus vehículos y asegura </h4>
        <h4 className="home-subtexto"> que haya espacios disponibles para facilitar la entrada y salida de los automóviles, </h4>
        <h4 className="home-subtexto">evitando la saturación del estacionamiento. Los usuarios completan un formulario con los detalles del vehículo,</h4>
        <h4 className="home-subtexto">como placa, matrícula, marca, modelo y tipo. </h4>
       
        <button className="home-button" onClick={handleLogout}>Cerrar Sesión</button>

   
      </div>

    
    </div>
  );
};

export default Home;
