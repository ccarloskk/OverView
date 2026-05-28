package com.carlosriquedev.OverView.Dto;

public class UsuarioDto {

    private String nome_usuario;
    private String email;
    private String password;

    public UsuarioDto(String nome_usuario, String email, String password) {
        this.nome_usuario = nome_usuario;
        this.email = email;
        this.password = password;
    }

    public UsuarioDto() {
    }

    public String getNome_usuario() {
        return nome_usuario;
    }

    public void setNome_usuario(String nome_usuario) {
        this.nome_usuario = nome_usuario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
