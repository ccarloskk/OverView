import React from "react";
import ProductCard from "./ProductCard";
import { produtos } from "./products";
import "./App.css";

export default function ProductList() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Catálogo dos produtos</h1>
        <p className="app-subtitle">Conheça nossos coldres de alta qualidade</p>
      </header>
      <main className="products-grid">
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </main>
    </div>
  );
}
