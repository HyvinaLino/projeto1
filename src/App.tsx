import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes}from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Contatos } from './Pages/Contatos/Contatos';
import { Modelos } from './Pages/Modelos/Modelos';

function App() {
  return (

    <div className="App">
       <div className='Anotacoes'>
        <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/modelos' element={<Modelos/>}/>
        <Route path='/Contatos' element={< Contatos />}/>
       </Routes>
       
       </BrowserRouter>

       </div>
    </div>
  );
}

export default App;
