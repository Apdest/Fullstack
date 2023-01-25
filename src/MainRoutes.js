import React from "react";
import { Route, Routes } from "react-router-dom";
import Forgot from "./componets/Auth/Forgot";
import LogIn from "./componets/Auth/LogIn";
import Register from "./componets/Auth/Register";
import Details from "./componets/Details/Details";
import Home from "./componets/Home/Home";
import AddProducts from "./componets/Products/AddProducts.jsx";
import ProdList from "./componets/Products/ProdList";
import Stores from "./pages/Stores";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/admin" element={<AddProducts />} />
        <Route path="/products" element={<ProdList />} />
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        {/* <Route path="/stores" element={<Stores />} /> */}
        {/* <Route path="/forgot" element={<Forgot />} /> */}
      </Routes>
    </div>
  );
};

export default MainRoutes;
