import React from 'react';
import { Routes, Route } from "react-router-dom";
import ProductAdd from './pages/productAdd/compoents/ProductAdd';
import ProductList from './pages/productList/components/ProductList';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/add-product' element={<ProductAdd />} />
      </Routes>
    </div>
  );
}

export default App;
