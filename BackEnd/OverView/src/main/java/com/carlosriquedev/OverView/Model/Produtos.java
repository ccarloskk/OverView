package com.carlosriquedev.OverView.Model;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "produtos")
public class Produtos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idProduto")
    private Integer idProduto;

    private String nome;
    private String preco;
    private String descricao;
    private String imagemUrl;
    private String garantia;

    @OneToMany(mappedBy = "produtos", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Caracteristica> caracteristicas = new ArrayList<>();

    @OneToMany(mappedBy = "produtos", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Especificacoes> especificacoes = new ArrayList<>();

    public Produtos() {
    }

    public Produtos(Integer idProduto, String nome, String preco, String descricao,
                    String imagemUrl, String garantia) {
        this.idProduto = idProduto;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.imagemUrl = imagemUrl;
        this.garantia = garantia;
        this.caracteristicas = new ArrayList<>();
        this.especificacoes = new ArrayList<>();
    }

    public Integer getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(Integer idProduto) {
        this.idProduto = idProduto;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getPreco() {
        return preco;
    }

    public void setPreco(String preco) {
        this.preco = preco;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagemUrl() {
        return imagemUrl;
    }

    public void setImagemUrl(String imagemUrl) {
        this.imagemUrl = imagemUrl;
    }

    public String getGarantia() {
        return garantia;
    }

    public void setGarantia(String garantia) {
        this.garantia = garantia;
    }

    public List<Caracteristica> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(List<Caracteristica> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public List<Especificacoes> getEspecificacoes() {
        return especificacoes;
    }

    public void setEspecificacoes(List<Especificacoes> especificacoes) {
        this.especificacoes = especificacoes;
    }

    public void adicionarCaracteristica(Caracteristica caracteristica) {
        caracteristicas.add(caracteristica);
        caracteristica.setProdutos(this);
    }

    public void adicionarEspecificacao(Especificacoes especificacao) {
        especificacoes.add(especificacao);
        especificacao.setProdutos(this);
    }
}