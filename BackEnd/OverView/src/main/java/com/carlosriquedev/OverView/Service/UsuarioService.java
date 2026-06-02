package com.carlosriquedev.OverView.Service;

import com.carlosriquedev.OverView.Dto.UsuarioDto;
import com.carlosriquedev.OverView.Model.Usuario;
import com.carlosriquedev.OverView.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    public Usuario criarUsuario(Usuario usuario) {
        String email = usuario.getEmail();

        String regexEmail = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.(com|com\\.br|net|org)$";

        if (!email.matches(regexEmail)) {
            throw new RuntimeException("Email inválido");
        }
        Optional<Usuario> usuarioExistente =
                usuarioRepository.findByEmail(email);
        if (usuarioExistente.isPresent()) {
            throw new RuntimeException(
                    "Usuário com email " + email + " já existe."
            );
        }
        String senhaCriptografada = bCryptPasswordEncoder.encode(usuario.getPassword());

        usuario.setPassword(senhaCriptografada);
        return usuarioRepository.save(usuario);
    }

    public Usuario loginUsuario(Usuario usuarioLogin) {
        Usuario usuario = usuarioRepository
                .findByEmail(usuarioLogin.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("Usuário não encontrado"));

        boolean senhaCorreta = bCryptPasswordEncoder.matches(
                usuarioLogin.getPassword(),
                usuario.getPassword()
        );
        if (!senhaCorreta) {
            throw new RuntimeException("Senha inválida");
        }
        return usuario;
    }
}