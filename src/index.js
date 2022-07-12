import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import Navbar from './components/organisms/Navbar/Navbar';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/shoppingcart' element={<ShoppingCart/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


