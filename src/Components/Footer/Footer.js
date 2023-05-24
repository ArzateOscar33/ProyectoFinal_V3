import React from 'react'
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <footer className='text-white py-4 bg-dark'>
        <div className='container'>
            <nav className='row'>
                <Link to='/' className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
                    CarIN
                </Link>
            <ul className='col-12 col-md-3 list-unstyled'>
                <li className='font-weight-bold mb-2'>Proyecto Final </li>
           
                <li className='text-center'>Pagina desarrollada para ITT </li>
                <li className='text-center'>Copyright Todos los derechos Reservados </li>
            </ul>
            <ul className='col-12 col-md-3 list-unstyled'>
                <li className='font-weight-bold mb-2'>Enlaces</li>
           
                <li>
                    <Link to='/' className='text-reset'>Home</Link>
                </li>
                <li>
                    <Link to='/Login' className='text-reset' >Login</Link>
                </li>
                <li>
                    <Link to='/Registro' className='text-reset'>Registro</Link>
                </li>
                <li>
                    <Link to='/Contacto' className='text-reset'>Contacto</Link>
                </li>
                
                 </ul>
                 <ul className='col-12 col-md-3 list-unstyled'>
                 <li className='font-weight-bold mb-2'>Siguenos en Facebook</li>
           <li className='d-flex justify-content-between'>
                 <i class="bi bi-facebook"> Oscar Arzate</i>
                 <i class="bi bi-whatsapp">6644913156</i>
                 
                 </li>
                 <li className='d-flex justify-content-between'>
                 <i class="bi bi-facebook"> Carlos Sanchez</i>
                 <i class="bi bi-whatsapp">6643512797</i>
                 </li>
             </ul>
            <div className='container'>
                <p className='text-center'>Programacion WEB</p>
            </div>
            
            </nav>
        </div>
    </footer>
    </>
  )
}

export default Footer