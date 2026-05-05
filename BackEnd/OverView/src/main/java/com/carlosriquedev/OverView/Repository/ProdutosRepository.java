package com.carlosriquedev.OverView.Repository;

import com.carlosriquedev.OverView.Model.Produtos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutosRepository extends JpaRepository<Produtos, Integer> {
}