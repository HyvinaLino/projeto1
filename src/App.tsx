import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes}from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Contatos } from './Pages/Contatos/Contatos';
import { Serviços } from './Pages/Serviços/Serviços';

function App() {
  return (

    <div className="App">
       <div className='Anotacoes'>
        <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/serviços' element={<Serviços/>}/>
        <Route path='/contatos' element={<Contatos/>}/>
       </Routes>
       
       </BrowserRouter>

       </div>
    </div>
  );
}

export default App;
