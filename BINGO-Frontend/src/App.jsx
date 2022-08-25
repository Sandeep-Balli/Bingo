import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

import Pay from './Stripe/Pay'
import Success from './Stripe/Success'

const App = () => {
  const user = true;
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login"  element= {user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register"  element= {user ? <Navigate to="/" /> : <Register />} />
        <Route path="pay" element={<Pay />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;