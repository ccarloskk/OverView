package com.carlosriquedev.OverView.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
    private String lanterna_modelo;

    @ManyToOne
    @JoinColumn(name = "idProduto", nullable = false)
    @JsonManagedReference
    @JsonIgnore
    private Produtos produtos;

    public Especificacoes() {
    }

    public Especificacoes(String modelo, Boolean lanterna, String lanterna_modelo) {
        this.modelo = modelo;
        this.lanterna = lanterna;
        this.lanterna_modelo = lanterna_modelo;
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

    public String getLanterna_modelo() {
        return lanterna_modelo;
    }

    public void setLanterna_modelo(String lanterna_modelo) {
        this.lanterna_modelo = lanterna_modelo;
    }

    public Produtos getProdutos() {
        return produtos;
    }

    public void setProdutos(Produtos produtos) {
        this.produtos = produtos;
    }
}