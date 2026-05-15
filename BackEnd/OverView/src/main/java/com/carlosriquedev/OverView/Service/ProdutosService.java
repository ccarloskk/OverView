package com.carlosriquedev.OverView.Service;

import com.carlosriquedev.OverView.Dto.CaracteristicaDto;
import com.carlosriquedev.OverView.Dto.EspecificacaoDto;
import com.carlosriquedev.OverView.Dto.ProdutosDto;
import com.carlosriquedev.OverView.Model.Caracteristica;
import com.carlosriquedev.OverView.Model.Especificacoes;
import com.carlosriquedev.OverView.Model.Produtos;
import com.carlosriquedev.OverView.Repository.ProdutosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutosService {

    @Autowired
    private ProdutosRepository repository;

    @Autowired
    private CaracteristicaService caracteristicaService;

    public Produtos criarProdutos(ProdutosDto produtosDto) {
        Produtos produto = new Produtos();
        produto.setNome(produtosDto.getNome());
        produto.setDescricao(produtosDto.getDescricao());
        produto.setPreco(produtosDto.getPreco());
        produto.setImagemUrl(produtosDto.getImagemUrl());
        produto.setGarantia(produtosDto.getGarantia());

        if (produtosDto.getEspecificacoes() != null) {
            EspecificacaoDto especDto = produtosDto.getEspecificacoes();
            Especificacoes especificacao = new Especificacoes();
            especificacao.setModelo(especDto.getModelo());
            especificacao.setLanterna(especDto.getLanterna());
            especificacao.setLanterna_modelo(especDto.getLanterna_modelo());

            produto.adicionarEspecificacao(especificacao);
        }

        if (produtosDto.getCaracteristicas() != null) {
            CaracteristicaDto caracDto = produtosDto.getCaracteristicas();
            Caracteristica caracteristica = new Caracteristica();
            caracteristica.setCaracteristica(caracDto.getCaracteristica());
            produto.adicionarCaracteristica(caracteristica);
        }
        return repository.save(produto);
    }

    public List<Produtos> MostrarProdutos() {
        return repository.findAll();
    }

    public Produtos buscarPorId(Integer id) {
        return repository.findById(id).orElse(null);
    }


    public Produtos atualizarProdutos(Long idProduto, ProdutosDto produtosDto){
        Produtos produto = buscarPorId(idProduto.intValue());
            produto.setNome(produtosDto.getNome());
            produto.setDescricao(produtosDto.getDescricao());
            produto.setPreco(produtosDto.getPreco());
            produto.setImagemUrl(produtosDto.getImagemUrl());
            produto.setGarantia(produtosDto.getGarantia());

            Especificacoes especificacoes = produto.getEspecificacoes();

            especificacoes.setModelo(produtosDto.getEspecificacoes().getModelo());
            especificacoes.setLanterna(produtosDto.getEspecificacoes().getLanterna());
            especificacoes.setLanterna_modelo(produtosDto.getEspecificacoes().getLanterna_modelo());

            Caracteristica caracteristica = produto.getCaracteristicas();

            caracteristica.setCaracteristica(produtosDto.getCaracteristicas().getCaracteristica());

            return repository.save(produto);
        }
}