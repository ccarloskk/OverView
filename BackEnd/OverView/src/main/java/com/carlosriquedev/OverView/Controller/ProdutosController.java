package com.carlosriquedev.OverView.Controller;

import com.carlosriquedev.OverView.Dto.ProdutosDto;
import com.carlosriquedev.OverView.Model.Produtos;
import com.carlosriquedev.OverView.Service.ProdutosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "*")
public class ProdutosController {

    @Autowired
    private ProdutosService service;

    @PostMapping("/criarProduto")
    public Produtos criarproduto(@RequestBody ProdutosDto produtos) {
        return service.criarProdutos(produtos);
    }

    @GetMapping("/mostrarProduto")
    public List<Produtos> MostrarProduto() {
        return service.MostrarProdutos();
    }

    @GetMapping("/{id}")
    public Produtos buscarPorId(@PathVariable Integer id) {
        return service.buscarPorId(id);
    }
}
