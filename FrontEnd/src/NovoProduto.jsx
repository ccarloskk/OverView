import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarProduto } from "./service/ProdutosService";
import "./NovoProduto.css";

export default function NovoProduto() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [imagemFile, setImagemFile] = useState("");
  const [garantia, setGarantia] = useState("");
  const [especificacoesModelo, setEspecificacoesModelo] = useState("");
  const [especificacoesLanterna, setEspecificacoesLanterna] = useState(false);
  const [especificacoesLanternaModelo, setEspecificacoesLanternaModelo] =
    useState("");
  const [caracteristica, setCaracteristica] = useState("");
  const [mensagem, setMensagem] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setMensagem(null);
    setLoading(true);

    if (!nome.trim() || !preco.trim()) {
      setMensagem({ tipo: "erro", texto: "Nome e preço são obrigatórios" });
      setLoading(false);
      return;
    }

    if (!imagemFile) {
      setMensagem({
        tipo: "erro",
        texto: "Selecione uma imagem para o produto",
      });
      setLoading(false);
      return;
    }

    const produto = {
      nome: nome.trim(),
      preco: String(preco).trim(),
      descricao: descricao.trim(),
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
      await criarProduto(produto, imagemFile);
      navigate("/admin");
      return;
    } catch (error) {
      setMensagem({
        tipo: "erro",
        texto: error.message || "Erro ao criar produto",
      });
    } finally {
      setLoading(false);
    }
  }

  function cancelar() {
    navigate("/admin");
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
              placeholder="Ex: Coldre G3"
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
            <label htmlFor="imagemFile">Selecione um arquivo de imagem</label>
            <input
              id="imagemFile"
              type="file"
              accept=".jpeg,.jpg,.png"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const validTypes = ["image/jpeg", "image/png"];
                  if (!validTypes.includes(file.type)) {
                    setMensagem({
                      tipo: "erro",
                      texto: "Apenas arquivos .jpeg e .png são permitidos",
                    });
                    setImagemFile(null);
                  } else {
                    setMensagem(null);
                    setImagemFile(file);
                  }
                }
              }}
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
              placeholder="Ex: Velado, clipe duplo"
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
                placeholder="Ex: GM23 TRUSTFIRE"
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
              placeholder="Ex: Materiais de boa qualidade"
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
            onClick={cancelar}
            disabled={loading}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
