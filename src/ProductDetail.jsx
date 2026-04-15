import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { produtos } from "./products";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const produto = produtos.find((p) => p.id === parseInt(id));

  const telefone = "5541991177679";
  const mensagem = `Olá, vi o produto ${produto?.nome} no site e gostaria de mais informações.`;
  const linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  if (!produto) {
    return (
      <div className="product-detail-container">
        <div className="product-detail-error">
          <h1>Produto não encontrado</h1>
          <button onClick={() => navigate("/")} className="back-button">
            Voltar para o catálogo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <button onClick={() => navigate("/")} className="back-button">
          ← Voltar para o catálogo
        </button>

        <div className="product-detail-content">
          <div className="product-detail-image-section">
            <img
              src={produto.imagemUrl}
              alt={produto.nome}
              className="product-detail-image"
            />
          </div>

          <div className="product-detail-info">
            <h1 className="product-detail-title">{produto.nome}</h1>
            <p className="product-detail-price">{produto.preco}</p>

            <div className="product-detail-section">
              <h2>Descrição</h2>
              <p className="product-detail-description">{produto.descricao}</p>
            </div>

            <div className="product-detail-section">
              <h2>Características</h2>
              <ul className="product-detail-features">
                <li>Material de alta qualidade e durabilidade</li>
                <li>Design ergonômico para melhor ajuste</li>
                <li>Acabamento profissional</li>
                <li>Compatível com o modelo especificado</li>
                <li>Produzido no Brasil</li>
              </ul>
            </div>

            <div className="product-detail-section">
              <h2>Garantia</h2>
              <p className="product-detail-warranty">
                Todos os nossos produtos possuem garantia de fabricação. Entre
                em contato para mais informações sobre termos e condições.
              </p>
            </div>

            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="product-detail-whatsapp-button"
            >
              Falar no WhatsApp sobre este produto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
