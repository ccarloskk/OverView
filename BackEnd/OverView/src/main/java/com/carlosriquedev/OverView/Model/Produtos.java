package com.carlosriquedev.OverView.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @OneToOne(mappedBy = "produtos", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    @JsonIgnore
    private Caracteristica caracteristicas = new Caracteristica();

    @OneToOne(mappedBy = "produtos", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    @JsonIgnore
    private Especificacoes especificacoes = new Especificacoes();

    public Produtos() {
    }

    public Produtos(Integer idProduto, String preco, String nome, String descricao, String imagemUrl, String garantia, Caracteristica caracteristicas, Especificacoes especificacoes) {
        this.idProduto = idProduto;
        this.preco = preco;
        this.nome = nome;
        this.descricao = descricao;
        this.imagemUrl = imagemUrl;
        this.garantia = garantia;
        this.caracteristicas = caracteristicas;
        this.especificacoes = especificacoes;
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

    public Caracteristica getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(Caracteristica caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public Especificacoes getEspecificacoes() {
        return especificacoes;
    }

    public void setEspecificacoes(Especificacoes especificacoes) {
        this.especificacoes = especificacoes;
    }

    public void adicionarCaracteristica(Caracteristica caracteristica) {
        this.caracteristicas = caracteristica;
        caracteristica.setProdutos(this);
    }

    public void adicionarEspecificacao(Especificacoes especificacao) {
        this.especificacoes = especificacao;
        especificacao.setProdutos(this);
    }
}