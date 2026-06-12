package com.carlosriquedev.OverView.Dto;

import com.carlosriquedev.OverView.Model.UserRole;

public record UsuarioDto(String nome_usuario, String email, String password, UserRole role) {
}
