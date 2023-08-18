import React from 'react';
import { Routes, Route as Router } from 'react-router-dom';
import Header from '../components/Header/Header.jsx';
import Shop from '../pages/Shop/shop.jsx';
import ProductDetail from '../pages/ProductDetail/ProductDetail.jsx';  

function Route() {
  return (
    <>
      <Header />
      <Routes>
        <Router path='/' element={<Shop />}/>
        <Router path='/product/:id' element={<ProductDetail />}/>
        <Router>404 Not Found!!!</Router>
      </Routes>
    </>
  )
}

export default Route