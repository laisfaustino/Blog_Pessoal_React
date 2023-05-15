import React from 'react'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import './App.css'
import { Grid, Paper } from '@mui/material';
import Home from './paginas/home/Home';

function App() {

   return (
      <>
         <Navbar />
         <Home />
         <Footer />

      </>
   )
};

export default App