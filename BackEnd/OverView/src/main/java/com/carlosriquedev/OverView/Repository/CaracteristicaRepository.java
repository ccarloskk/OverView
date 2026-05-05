package com.carlosriquedev.OverView.Repository;

import com.carlosriquedev.OverView.Model.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CaracteristicaRepository extends JpaRepository<Caracteristica, Integer> {
}