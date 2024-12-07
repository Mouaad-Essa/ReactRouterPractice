import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import RootLayout from "./Layouts/RootLayout.jsx";
import LoginLayout from "./Layouts/LoginLayout.jsx";
import Login from "./pages/Login.jsx";
import Products from "./pages/Products/Products.jsx";
import Product from "./pages/Products/Product.jsx";
import About from "./pages/About.jsx";
import ProductDetails from "./pages/Products/ProductDetails.jsx";
import Contact from "./pages/Contact.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="Products">
            <Route index element={<Products />} />
            <Route path=":idp" element={<Product />} />
            <Route path=":idp/Detail" element={<ProductDetails />} />
          </Route>
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
