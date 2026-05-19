import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mostrarProdutos } from "./service/ProdutosService";
import "./admin.css";

export default function AdminProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const data = await mostrarProdutos();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h2>Coldres La</h2>
          <span>Admin Painel</span>
        </div>

        <nav className="sidebar-menu">
          <button className="menu-item active">
            <span>📦</span>
            Produtos em Cátalago
          </button>

          <button className="menu-item">
            <span>⚙️</span>
            Produtos em Estoque
          </button>
        </nav>
      </aside>
      <main className="admin-content">
        <header className="topbar">
          <div>
            <h1>Painel de Produtos</h1>
            <p>Gerencie todos os produtos da plataforma</p>
          </div>

          <div className="topbar-actions">
            <button
              className="btn-primary"
              onClick={() => (window.location.href = "/admin/NovoProduto")}
            >
              + Novo Produto
            </button>{" "}
          </div>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <span>Total Produtos</span>
            <h2>0</h2>
          </div>

          <div className="stat-card">
            <span>Estoque Baixo</span>
            <h2>0</h2>
          </div>
        </section>

        <section className="table-section">
          <div className="table-header">
            <div>
              <h2>Produto Publicado</h2>
              <p>Lista completa de produtos cadastrados</p>
            </div>

            <div className="table-actions">
              <select className="filter-select">
                <option>Todos</option>
                <option>Em Estoque</option>
                <option>Sem Estoque</option>
              </select>
            </div>
          </div>

          <div className="table-wrapper">
            <table className="products-table">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Garantia</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto) => (
                  <tr key={produto.idProduto}>
                    <td>
                      <div className="product-cell">
                        <img src={produto.imagemUrl} alt={produto.nome} />

                        <div>
                          <strong>{produto.nome}</strong>
                          <span>#ID {produto.idProduto}</span>
                        </div>
                      </div>
                    </td>

                    <td className="price">R$ {produto.preco}</td>
                    <td className="garantia">{produto.garantia}</td>
                    <td>
                      <div className="actions">
                        <button className="edit">Editar</button>

                        <button className="delete">Excluir</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
