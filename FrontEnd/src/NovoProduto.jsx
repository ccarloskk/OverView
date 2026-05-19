import React, { useState } from "react";
import { criarProduto } from "./service/ProdutosService";
import "./NovoProduto.css";

export default function NovoProduto() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [garantia, setGarantia] = useState("");
  const [especificacoesModelo, setEspecificacoesModelo] = useState("");
  const [especificacoesLanterna, setEspecificacoesLanterna] = useState(false);
  const [especificacoesLanternaModelo, setEspecificacoesLanternaModelo] =
    useState("");
  const [caracteristica, setCaracteristica] = useState("");
  const [mensagem, setMensagem] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setMensagem(null);
    setLoading(true);

    if (!nome.trim() || !preco.trim()) {
      setMensagem({ tipo: "erro", texto: "Nome e preço são obrigatórios" });
      setLoading(false);
      return;
    }

    const produto = {
      nome: nome.trim(),
      preco: String(preco).trim(),
      descricao: descricao.trim(),
      imagemUrl: imagemUrl.trim(),
      garantia: garantia.trim(),
      especificacoes: {
        modelo: especificacoesModelo.trim(),
        lanterna: !!especificacoesLanterna,
        lanterna_modelo: especificacoesLanternaModelo.trim(),
      },
      caracteristicas: {
        caracteristica: caracteristica.trim(),
      },
    };

    try {
      await criarProduto(produto);
      setMensagem({
        tipo: "sucesso",
        texto: "Produto criado com sucesso!",
      });
      limparFormulario();
    } catch (error) {
      setMensagem({
        tipo: "erro",
        texto: error.message || "Erro ao criar produto",
      });
    } finally {
      setLoading(false);
    }
  }

  function limparFormulario() {
    setNome("");
    setDescricao("");
    setPreco("");
    setImagemUrl("");
    setGarantia("");
    setEspecificacoesModelo("");
    setEspecificacoesLanterna(false);
    setEspecificacoesLanternaModelo("");
    setCaracteristica("");
  }

  return (
    <div className="novo-produto-container">
      <div className="novo-produto-header">
        <h1>Criar Novo Produto</h1>
        <p>Preencha os dados abaixo para adicionar um novo produto</p>
      </div>

      {mensagem && (
        <div className={`mensagem mensagem-${mensagem.tipo}`}>
          {mensagem.texto}
        </div>
      )}

      <form onSubmit={handleSubmit} className="novo-produto-form">
        <fieldset className="form-section">
          <legend>Informações Básicas</legend>

          <div className="form-group">
            <label htmlFor="nome">Nome do Produto *</label>
            <input
              id="nome"
              type="text"
              placeholder="Ex: iPhone 15"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="preco">Preço *</label>
            <input
              id="preco"
              type="number"
              placeholder="A partir de:"
              step="0.01"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              placeholder="Ex: Descrição completa do produto"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              rows="4"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="imagemUrl">URL da Imagem</label>
            <input
              id="imagemUrl"
              type="url"
              placeholder="Ex: https://exemplo.com/imagem.jpg"
              value={imagemUrl}
              onChange={(e) => setImagemUrl(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="garantia">Garantia</label>
            <input
              id="garantia"
              type="text"
              placeholder="Ex: 12 meses"
              value={garantia}
              onChange={(e) => setGarantia(e.target.value)}
            />
          </div>
        </fieldset>

        <fieldset className="form-section">
          <legend>Especificações</legend>

          <div className="form-group">
            <label htmlFor="modelo">Modelo</label>
            <input
              id="modelo"
              type="text"
              placeholder="Ex: XYZ-100"
              value={especificacoesModelo}
              onChange={(e) => setEspecificacoesModelo(e.target.value)}
            />
          </div>

          <div className="form-group checkbox">
            <input
              id="lanterna"
              type="checkbox"
              checked={especificacoesLanterna}
              onChange={(e) => setEspecificacoesLanterna(e.target.checked)}
            />
            <label htmlFor="lanterna">Este produto tem lanterna?</label>
          </div>

          {especificacoesLanterna && (
            <div className="form-group">
              <label htmlFor="lanternaModelo">Modelo da Lanterna</label>
              <input
                id="lanternaModelo"
                type="text"
                placeholder="Ex: LED-500"
                value={especificacoesLanternaModelo}
                onChange={(e) =>
                  setEspecificacoesLanternaModelo(e.target.value)
                }
              />
            </div>
          )}
        </fieldset>

        <fieldset className="form-section">
          <legend>Características</legend>

          <div className="form-group">
            <label htmlFor="caracteristica">Característica Principal</label>
            <input
              id="caracteristica"
              type="text"
              placeholder="Ex: Resistente à água"
              value={caracteristica}
              onChange={(e) => setCaracteristica(e.target.value)}
            />
          </div>
        </fieldset>

        <div className="form-actions">
          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? "Criando..." : "Criar Produto"}
          </button>
          <button
            type="button"
            className="btn-limpar"
            onClick={limparFormulario}
            disabled={loading}
          >
            Limpar Formulário
          </button>
        </div>
      </form>
    </div>
  );
}
