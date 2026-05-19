import React, { useEffect, useState } from "react";
import ProductCard from "./ProdutoCard";
import { mostrarProdutos } from "./service/ProdutosService";
import logoEmpresa from "./service/logo-marca.jpg";
import "./ProductList.css";

export default function ProductList() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        setLoading(true);

        const dados = await mostrarProdutos();

        setProdutos(dados);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);

        setError(err.message || "Erro ao carregar produtos");
      } finally {
        setLoading(false);
      }
    }

    buscarProdutos();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-brand">
          <img src={logoEmpresa} alt="Logo da empresa" className="brand-logo" />

          <div>
            <h1 className="app-title">Catálogo dos produtos</h1>

            <p className="app-subtitle">
              Conheça nossos coldres de alta qualidade
            </p>
          </div>
        </div>
      </header>

      {loading ? (
        <p className="status-message">Carregando produtos...</p>
      ) : error ? (
        <p className="status-message error-message">
          Erro ao carregar produtos - {error}
        </p>
      ) : (
        <main className="products-grid">
          {produtos.map((produto) => (
            <ProductCard key={produto.idProduto} produto={produto} />
          ))}
        </main>
      )}
    </div>
  );
}
