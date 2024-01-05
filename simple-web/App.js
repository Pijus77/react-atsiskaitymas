// App.js
import React from 'react';
import { useState } from 'react';
import NavBar from './src/simple-web/Pages/components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './src/simple-web/Pages/Shop';
import ProductDetails from './src/simple-web/Pages/ProductDetails';
import Cart from './src/simple-web/Pages/Cart';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Routes>
          <Route path='/shop' element={<Shop />} />
          <Route path='/productdetails/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
