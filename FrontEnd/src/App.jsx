import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Admin from "./Admin";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/produto/:id" element={<ProductDetail />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
