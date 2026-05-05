package com.carlosriquedev.OverView.Controller;

import com.carlosriquedev.OverView.Dto.EspecificacaoDto;
import com.carlosriquedev.OverView.Model.Especificacoes;
import com.carlosriquedev.OverView.Service.EspecificacoesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/especificacoes")
@CrossOrigin(origins = "*")
public class EspecificacoesController {

    @Autowired
    private EspecificacoesService service;

    @PostMapping("/criarEspecificacoes")
    public Especificacoes criarEspecificacoes(@RequestBody EspecificacaoDto dto) {
        return service.criarEspecificacoes(dto);
    }
}
