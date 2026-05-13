import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mostrarProdutos } from "./service/ProdutosService";
import "./ProdutoCard.css";

export default function ProductCard({ produto }) {
  const [produtoDetalhes, setProdutoDetalhes] = useState(produto);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const buscarProduto = async () => {
      try {
        setLoading(true);
        const produtos = await mostrarProdutos();
        const produtoEncontrado = produtos.find(
          (p) => p.idProduto === produto.idProduto,
        );

        if (produtoEncontrado) {
          setProdutoDetalhes(produtoEncontrado);
        }
      } catch (err) {
        console.error("Erro ao buscar detalhes do produto:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    buscarProduto();
  }, [produto.idProduto]);

  const telefone = "5541991177679";
  const mensagem = `Olá, vi o produto ${produtoDetalhes.nome} no site e gostaria de mais informações.`;
  const linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  if (loading) {
    return <div className="product-card">Carregando...</div>;
  }

  if (error) {
    return (
      <div className="product-card">
        <p className="product-error">Erro ao carregar produto</p>
      </div>
    );
  }

  return (
    <div className="product-card">
      <Link
        to={`/produto/${produtoDetalhes.idProduto}`}
        className="product-card-link"
      >
        <div className="product-image-container">
          <img
            src={produtoDetalhes.imagemUrl}
            alt={produtoDetalhes.nome}
            className="product-image"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="product-info">
        <Link
          to={`/produto/${produtoDetalhes.idProduto}`}
          className="product-name-link"
        >
          <h3 className="product-name">{produtoDetalhes.nome}</h3>
        </Link>
        <p className="product-price"> A partir de R${produtoDetalhes.preco}</p>
        <p className="product-description">{produtoDetalhes.descricao}</p>
        <Link
          to={`/produto/${produtoDetalhes.idProduto}`}
          className="view-details-button"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
