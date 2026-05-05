package com.carlosriquedev.OverView.Repository;

import com.carlosriquedev.OverView.Model.Especificacoes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EspecificacoesRepository extends JpaRepository<Especificacoes, Integer> {
    boolean existsByProdutos_IdProduto(Integer idProduto);
}