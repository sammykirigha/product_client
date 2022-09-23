import React from 'react';
import { Routes, Route } from "react-router-dom";
import Footer from './pages/footer/Footer';
import ProductAdd from './pages/productAdd/compoents/ProductAdd';
import ProductList from './pages/productList/components/ProductList';


function App() {
  return (
    <div className="custom-breakpoint-container h-screen ">
      
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/add-product' element={<ProductAdd />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
