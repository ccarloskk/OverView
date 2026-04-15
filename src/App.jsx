import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/produto/:id" element={<ProductDetail />} />
    </Routes>
  );
}
