import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { buscarProdutoPorId } from "./service/ProdutosService";
import "./ProdutoDetalhes.css";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const carregarProduto = async () => {
      try {
        setLoading(true);
        const data = await buscarProdutoPorId(id);
        setProduto(data);
        setErro(null);
      } catch (error) {
        console.error("Erro ao carregar produto:", error);
        setErro(error.message);
      } finally {
        setLoading(false);
      }
    };

    carregarProduto();
  }, [id]);

  const telefone = "5541991177679";
  const mensagem = `Olá, vi o produto ${produto?.nome} no site e gostaria de mais informações.`;
  const linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  if (loading) {
    return (
      <div className="product-detail-container">
        <div className="product-detail-error">
          <h1>Carregando produto...</h1>
        </div>
      </div>
    );
  }

  if (erro || !produto) {
    return (
      <div className="product-detail-container">
        <div className="product-detail-error">
          <h1>Produto não encontrado</h1>
          <p>{erro}</p>
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
            <p className="product-detail-price">
              {" "}
              A partir de R${produto.preco}
            </p>

            <div className="product-detail-section">
              <h2>Descrição</h2>
              <p className="product-detail-description">{produto.descricao}</p>
            </div>

            {produto.caracteristicas.caracteristica && (
              <div className="product-detail-section">
                <h2>Características</h2>

                <ul className="product-detail-features">
                  <li>{produto.caracteristicas.caracteristica}</li>
                </ul>
              </div>
            )}

            {produto.especificacoes && (
              <div className="product-detail-section">
                <h2>Especificações Técnicas</h2>

                <div className="product-detail-specs">
                  <div className="spec-item">
                    <span className="spec-label">Modelo de coldre:</span>
                    <span className="spec-value">
                      {produto.especificacoes.modelo}
                    </span>
                  </div>

                  <div className="spec-item">
                    <span className="spec-label">Modelo Lanterna:</span>
                    <span className="spec-value">
                      {produto.especificacoes.lanterna_modelo}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="product-detail-section">
              <h2>Garantia</h2>
              <p className="product-detail-warranty">
                {produto.garantia ||
                  "Todos os nossos produtos possuem garantia de fabricação. Entre em contato para mais informações sobre termos e condições."}
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
