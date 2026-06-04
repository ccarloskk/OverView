import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProdutoDetalhes";
import Admin from "./Admin";
import NovoProduto from "./NovoProduto";
import "./App.css";
import AtualizarProduto from "./AtualizarProduto";
import LoginAdmin from "./LoginAdmin";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/produto/:id" element={<ProductDetail />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/NovoProduto" element={<NovoProduto />} />
      <Route
        path="/admin/AtualizarProduto/:id"
        element={<AtualizarProduto />}
      />
      <Route path="/login" element={<LoginAdmin />} />
    </Routes>
  );
}
