package com.carlosriquedev.OverView.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "nome_usuario", nullable = false, length = 100)
    private String nome_usuario;

    @Column(name = "email", nullable = false, unique = true, length = 254)
    private String email;

    @Column(name = "password", nullable = false, length = 60)
    private String password;

    public Usuario() {
    }

    public Usuario(String nome_usuario, String email, String password) {
        this.nome_usuario = nome_usuario;
        this.email = email;
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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