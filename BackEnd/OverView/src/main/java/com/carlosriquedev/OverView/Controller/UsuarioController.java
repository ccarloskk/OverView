package com.carlosriquedev.OverView.Controller;

import com.carlosriquedev.OverView.Dto.UsuarioAuthDto;
import com.carlosriquedev.OverView.Dto.UsuarioDto;
import com.carlosriquedev.OverView.Service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody @Valid UsuarioAuthDto usuarioAuthDto) {
        usuarioService.login(usuarioAuthDto);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/criarUsuario")
    public ResponseEntity<Void> criarUsuario(@RequestBody @Valid UsuarioDto usuarioDto) {
        usuarioService.criarUsuario(usuarioDto);
        return ResponseEntity.ok().build();
    }
}
