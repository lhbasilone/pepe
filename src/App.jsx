import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Saludo from './components/Saludo';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Clicker from './components/Clicker';
import ProductsList from './components/ProductsList';
import CharList from './components/rickandmorty/CharList';
import GlassesList from './after1/GlassesList';
import GlassDetail from './after1/GlassDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharDetail from './components/rickandmorty/CharDetail';
import ClickEvent from './components/ClickEvent';
import ClickChange from './components/ClickChange';
import React, { useState } from 'react';
import { DarkmodeContext } from './context/darkmodeContext';
import GlassCart from './after1/GlassCart';
import PokeHome from './components/Pokemon.js/PokeHome';
import PokeContainer from './components/Pokemon.js/PokeContainer';
import ItemsList from './components/FromFirebase/ItemsList';

function App() {

  return (
    <DarkmodeContext.Provider value={DarkmodeContext}>
      <BrowserRouter>
        <NavBar/>
        {/* <button className='btn' onClick={DarkmodeToggle}>Darkmode{darkmode ? 'on' : 'off'}</button> */}
        <Routes>
          <Route path='/' element={<GlassesList/>} />
          <Route path='/glass/:id' element={<GlassDetail/>} />
          <Route path='/glass/cart' element={<GlassCart/>} />
          <Route path='/rick' element={<CharList/>} />
          <Route path='/rick/:charId' element={<CharDetail/>} />
          <Route path='/phones' element={<ProductsList/>} />
          <Route path='/event' element={<ClickEvent/>} />
          <Route path='/clickchange' element={<ClickChange/>} />
          <Route path='/pokemon' element={<PokeHome/>} />
          <Route path='/pokemon/list' element={<PokeContainer/>} />
          <Route path='/items' element={<ItemsList/>} />
        </Routes>
        <Footer/>

      </BrowserRouter>
    </DarkmodeContext.Provider>
  );
}

export default App;
