
import './App.css';
import { Navbar } from './Components/Navbar';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import  Home  from './Components/Pages/Home';
import  Contacto  from './Components/Pages/Contacto';

import  Registro  from './Components/Pages/Registro';
import Login from './Components/Pages/Login';
import Footer from './Components/Footer/Footer';
import { AuthProvider } from './Context/authContext';
import { useState } from 'react';
import Registro_vehiculos from './Components/Pages/Registro_vehiculos';
import { ProtectedRoute } from './Components/Pages/ProtectedRoute';


function App() {

const[user,setUser]=useState(null);


  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      
     
      <Route path="/" element={
      <ProtectedRoute>
      <Home/>
      </ProtectedRoute>}/>
      <Route path="/Registro" element={
      
      <Registro/>
      }/>
      
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Contacto" element={<Contacto/>}/>

      
      <Route path="/Registro_vehiculos" element={<ProtectedRoute>
      <Registro_vehiculos/>
      </ProtectedRoute>}/>

     </Routes>
     <Footer/>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
