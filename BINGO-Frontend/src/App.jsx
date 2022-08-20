import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Product from "./pages/Product";
import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";

import Pay from './Stripe/Pay'
import Success from './Stripe/Success'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pay" element={<Pay />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  )
  // return <div>
  //   <Home />
  //   {/* <ProductList /> */}
  //   {/* <Product /> */}
  //   {/* <Register /> */}
  //   {/* <Login /> */}
  //   {/* <Cart /> */}
  // </div>;
};

export default App;