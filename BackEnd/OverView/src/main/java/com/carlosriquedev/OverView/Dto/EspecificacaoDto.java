package com.carlosriquedev.OverView.Dto;

public class EspecificacaoDto {
    private String modelo;
    private Boolean lanterna;
    private String lanterna_modelo;
    private Integer idProduto;

    public EspecificacaoDto() {
    }

    public EspecificacaoDto(String modelo, Boolean lanterna, String lanterna_modelo, Integer idProduto) {
        this.modelo = modelo;
        this.lanterna = lanterna;
        this.lanterna_modelo = lanterna_modelo;
        this.idProduto = idProduto;
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

    public Integer getIdProduto() {
        return idProduto;
    }

    public void setIdProduto(Integer idProduto) {
        this.idProduto = idProduto;
    }
}
