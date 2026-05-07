import React from "react";
import "./admin.css";

export default function AdminProdutos() {
  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="header-content">
          <h1 className="admin-title">Painel Admin</h1>
          <p className="admin-subtitle">Gerenciamento de Produtos</p>
        </div>
      </header>

      <main className="admin-main">
        {/* Form Section */}
        <section className="card form-card">
          <div className="card-header">
            <h2 className="card-title">Novo Produto</h2>
            <span className="card-badge">Modo Criação</span>
          </div>

          <div className="form-section">
            <h3 className="form-section-title">Informações Básicas</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Nome do Produto *</label>
                <input
                  type="text"
                  placeholder="Ex: Broca de Carbeto 10mm"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Preço (R$) *</label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="form-input"
                />
              </div>

              <div className="form-group full-width">
                <label>Descrição</label>
                <textarea
                  className="form-input form-textarea"
                  rows="3"
                  placeholder="Descrição detalhada..."
                />
              </div>

              <div className="form-group">
                <label>URL da Imagem</label>
                <input
                  type="url"
                  placeholder="https://..."
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Garantia</label>
                <select className="form-input">
                  <option>Selecione...</option>
                  <option>3 meses</option>
                  <option>6 meses</option>
                  <option>1 ano</option>
                  <option>2 anos</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3 className="form-section-title">Especificações</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Modelo</label>
                <input
                  type="text"
                  placeholder="Ex: XYZ-100"
                  className="form-input"
                />
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" className="form-checkbox" />
                  <span>Possui Lanterna</span>
                </label>
              </div>

              <div className="form-group full-width">
                <label>Modelo da Lanterna</label>
                <input
                  type="text"
                  placeholder="Ex: LED-500"
                  className="form-input"
                />
              </div>

              <div className="form-group full-width">
                <label>Características</label>
                <textarea
                  className="form-input form-textarea"
                  rows="2"
                  placeholder="Características..."
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button className="btn btn-primary">Salvar</button>
            <button className="btn btn-secondary">Cancelar</button>
          </div>
        </section>

        {/* Table Section */}
        <section className="card table-card">
          <div className="card-header">
            <h2 className="card-title">Lista de Produtos</h2>
            <div className="search-box">
              <input
                type="text"
                placeholder="Buscar por nome..."
                className="search-input"
              />
            </div>
          </div>

          <div className="table-wrapper">
            <table className="products-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Modelo</th>
                  <th>Garantia</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td>
                    <strong>Broca de Carbeto</strong>
                  </td>
                  <td>R$ 45.90</td>
                  <td>XYZ-100</td>
                  <td>
                    <span className="badge badge-info">1 ano</span>
                  </td>
                  <td>
                    <span className="badge badge-success">Com Lanterna</span>
                  </td>
                  <td>
                    <button className="btn-icon btn-edit">Editar</button>
                    <button className="btn-icon btn-delete">Excluir</button>
                  </td>
                </tr>

                <tr className="table-row">
                  <td>
                    <strong>Broca de Aço</strong>
                  </td>
                  <td>R$ 25.50</td>
                  <td>ABC-50</td>
                  <td>
                    <span className="badge badge-info">6 meses</span>
                  </td>
                  <td>
                    <span className="badge badge-default">Sem Lanterna</span>
                  </td>
                  <td>
                    <button className="btn-icon btn-edit">Editar</button>
                    <button className="btn-icon btn-delete">Excluir</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            <span>
              Total: <strong>2</strong> produto(s)
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
