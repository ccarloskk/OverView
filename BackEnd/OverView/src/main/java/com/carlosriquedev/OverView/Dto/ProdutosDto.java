package com.carlosriquedev.OverView.Dto;


public class ProdutosDto {
    private String nome;
    private String preco;
    private String descricao;
    private String imagemUrl;
    private String garantia;
    private EspecificacaoDto especificacoes;
    private CaracteristicaDto caracteristicas;

    public ProdutosDto() {
    }

    public ProdutosDto(String nome, String preco, String descricao, String imagemUrl,
                       String garantia, EspecificacaoDto especificacoes, CaracteristicaDto caracteristicas) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.imagemUrl = imagemUrl;
        this.garantia = garantia;
        this.especificacoes = especificacoes;
        this.caracteristicas = caracteristicas;
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

    public EspecificacaoDto getEspecificacoes() {
        return especificacoes;
    }

    public void setEspecificacoes(EspecificacaoDto especificacoes) {
        this.especificacoes = especificacoes;
    }

    public CaracteristicaDto getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(CaracteristicaDto caracteristicas) {
        this.caracteristicas = caracteristicas;
    }
}