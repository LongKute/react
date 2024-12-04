import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route} from "react-router";
import  LoginPage  from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import UserPage from "./pages/users.jsx";
import ProductPage from "./pages/products.jsx";
import "./style/global.css"
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />,
      <Route path="/login" element = {<LoginPage />} />
      <Route path="/register" element = {<RegisterPage />} />
      <Route path="/user" element = {<UserPage />} />
      <Route path="/product" element = {<ProductPage />} />


      
    </Routes>
  </BrowserRouter>
);
