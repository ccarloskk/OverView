package com.carlosriquedev.OverView.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "especificacoes")
public class Especificacoes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idEspecificacoes;

    @Column(nullable = false)
    private String modelo;

    private Boolean lanterna;

    private String lanternaModelo;

    @OneToOne
    @JoinColumn(name = "produto_id", nullable = false)
    private Produtos produtos;


    public Especificacoes(Integer idEspecificacoes, String modelo, Boolean lanterna, String lanternaModelo, Produtos produtos) {
        this.idEspecificacoes = idEspecificacoes;
        this.modelo = modelo;
        this.lanterna = lanterna;
        this.lanternaModelo = lanternaModelo;
        this.produtos = produtos;
    }

    public Integer getIdEspecificacoes() {
        return idEspecificacoes;
    }

    public void setIdEspecificacoes(Integer idEspecificacoes) {
        this.idEspecificacoes = idEspecificacoes;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Boolean getLanterna() {
        return lanterna;
    }

    public void setLanterna(Boolean lanterna) {
        this.lanterna = lanterna;
    }

    public String getLanternaModelo() {
        return lanternaModelo;
    }

    public void setLanternaModelo(String lanternaModelo) {
        this.lanternaModelo = lanternaModelo;
    }

    public Produtos getProdutos() {
        return produtos;
    }

    public void setProdutos(Produtos produtos) {
        this.produtos = produtos;
    }
}