package com.carlosriquedev.OverView.Service;

import com.carlosriquedev.OverView.Dto.UsuarioAuthDto;
import com.carlosriquedev.OverView.Dto.UsuarioDto;
import com.carlosriquedev.OverView.Model.Usuario;
import com.carlosriquedev.OverView.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    public void criarUsuario(UsuarioDto usuarioDto) {

        if (usuarioRepository.findByEmail(usuarioDto.email()) != null) {
            throw new RuntimeException("Email já cadastrado");
        }

        String senhaCriptografada =
                new BCryptPasswordEncoder().encode(usuarioDto.password());

        Usuario usuario = new Usuario(
                usuarioDto.nome_usuario(),
                usuarioDto.email(),
                senhaCriptografada,
                usuarioDto.role()
        );
        usuarioRepository.save(usuario);
    }

    public void login (UsuarioAuthDto usuarioAuthDto) {
        var usuarioLogin = new UsernamePasswordAuthenticationToken(usuarioAuthDto.email(), usuarioAuthDto.password());
        authenticationManager.authenticate(usuarioLogin);
    }
}