import React from "react";
import "./admin.css";

export default function AdminProdutos() {
  return (
    <div className="container">
      <h1 className="title">Painel Admin - Produtos</h1>

      <div className="card">
        <h2>Cadastrar / Editar Produto</h2>

        <div className="grid">
          <input placeholder="Nome" />
          <input placeholder="Preço" />
          <input className="full" placeholder="Descrição" />
          <input placeholder="Imagem URL" />
          <input placeholder="Garantia" />
        </div>

        <h3>Especificações</h3>
        <div className="grid">
          <input placeholder="Modelo" />
          <div className="checkbox">
            <input type="checkbox" />
            <label>Possui Lanterna</label>
          </div>
          <input className="full" placeholder="Modelo da Lanterna" />
        </div>

        <h3>Características</h3>
        <input className="full" placeholder="Característica" />

        <div className="actions">
          <button className="save">Salvar</button>
          <button className="cancel">Cancelar</button>
        </div>
      </div>

=      <div className="card">
        <h2>Lista de Produtos</h2>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Garantia</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Produto Exemplo</td>
              <td>R$100</td>
              <td>1 ano</td>
              <td>
                <button className="edit">Editar</button>
                <button className="delete">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}