import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ produto }) {
  const telefone = "5541991177679";
  const mensagem = `Olá, vi o produto ${produto.nome} no site e gostaria de mais informações.`;
  const linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  return (
    <div className="product-card">
      <Link to={`/produto/${produto.id}`} className="product-card-link">
        <div className="product-image-container">
          <img
            src={produto.imagemUrl}
            alt={produto.nome}
            className="product-image"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="product-info">
        <Link to={`/produto/${produto.id}`} className="product-name-link">
          <h3 className="product-name">{produto.nome}</h3>
        </Link>
        <p className="product-price">{produto.preco}</p>
        <p className="product-description">{produto.descricao}</p>
        <Link to={`/produto/${produto.id}`} className="view-details-button">
          Ver detalhes
        </Link>
        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="product-button"
        >
          Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}
