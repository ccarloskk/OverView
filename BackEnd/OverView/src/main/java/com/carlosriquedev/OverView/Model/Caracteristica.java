package com.carlosriquedev.OverView.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "caracteristicas")
public class Caracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCaracteristica;

    private String caracteristica;

    @ManyToOne
    @JoinColumn(name = "idProduto", nullable = false)
    private Produtos produtos;

    public Caracteristica(Integer idCaracteristica, String caracteristica, Produtos produtos) {
        this.idCaracteristica = idCaracteristica;
        this.caracteristica = caracteristica;
        this.produtos = produtos;
    }

    public Integer getIdCaracteristica() {
        return idCaracteristica;
    }

    public void setIdCaracteristica(Integer idCaracteristica) {
        this.idCaracteristica = idCaracteristica;
    }

    public String getCaracteristica() {
        return caracteristica;
    }

    public void setCaracteristica(String caracteristica) {
        this.caracteristica = caracteristica;
    }

    public Produtos getProdutos() {
        return produtos;
    }

    public void setProdutos(Produtos produtos) {
        this.produtos = produtos;
    }
}
