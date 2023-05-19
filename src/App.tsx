import React from 'react'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Carrossel from './components/carrossel/Carrossel';
import './App.css'
import Home from './paginas/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';


function App() {

   return (
      <>
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
               <Route path="/login" element={<Login />}/>
               <Route path="/cadastrousuario" element={<CadastroUsuario/>} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   )
};

export default App