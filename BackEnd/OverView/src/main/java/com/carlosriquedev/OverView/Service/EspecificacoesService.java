package com.carlosriquedev.OverView.Service;

import com.carlosriquedev.OverView.Dto.EspecificacaoDto;
import com.carlosriquedev.OverView.Model.Especificacoes;
import com.carlosriquedev.OverView.Model.Produtos;
import com.carlosriquedev.OverView.Repository.EspecificacoesRepository;
import com.carlosriquedev.OverView.Repository.ProdutosRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EspecificacoesService {

    @Autowired
    ProdutosRepository produtosRepository;

    @Autowired
    EspecificacoesRepository especificacoesRepository;

    public Especificacoes criarEspecificacoes(EspecificacaoDto dto) {
        if (dto.getIdProduto() == null) {
            throw new IllegalArgumentException("ID do Produto é obrigatório");
        }

        if (especificacoesRepository.existsByProdutos_IdProduto(dto.getIdProduto())) {
            throw new IllegalArgumentException("Já existe uma Especificação para este Produto");
        }

        Produtos produtos = produtosRepository.findById(dto.getIdProduto())
                .orElseThrow(() -> new EntityNotFoundException("Produto não encontrado"));

        Especificacoes especificacoes = new Especificacoes();
        especificacoes.setModelo(dto.getModelo());
        especificacoes.setLanterna(dto.getLanterna() != null ? dto.getLanterna() : false);
        especificacoes.setLanterna_modelo(dto.getLanterna_modelo());
        especificacoes.setProdutos(produtos);
        return especificacoesRepository.save(especificacoes);
    }
}
