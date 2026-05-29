package com.carlosriquedev.OverView.Controller;

import com.carlosriquedev.OverView.Model.Usuario;
import com.carlosriquedev.OverView.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/criarUsuario")
    public Usuario cirarUsuario(@RequestBody Usuario usuario) {
        return usuarioService.criarUsuario(usuario);
    }
}
