package com.carlosriquedev.OverView.Dto;


public class CaracteristicaDto {
    private Integer idCarcteristica;
    private String caracteristica;

    public CaracteristicaDto() {
    }

    public CaracteristicaDto(Integer idCarcteristica, String caracteristica) {
        this.idCarcteristica = idCarcteristica;
        this.caracteristica = caracteristica;
    }

    public Integer getIdCarcteristica() {
        return idCarcteristica;
    }

    public void setIdCarcteristica(Integer idCarcteristica) {
        this.idCarcteristica = idCarcteristica;
    }

    public String getCaracteristica() {
        return caracteristica;
    }

    public void setCaracteristica(String caracteristica) {
        this.caracteristica = caracteristica;
    }
}
