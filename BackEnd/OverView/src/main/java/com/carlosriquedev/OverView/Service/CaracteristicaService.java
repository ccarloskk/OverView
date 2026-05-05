package com.carlosriquedev.OverView.Service;

import com.carlosriquedev.OverView.Dto.CaracteristicaDto;
import com.carlosriquedev.OverView.Model.Caracteristica;
import com.carlosriquedev.OverView.Repository.CaracteristicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CaracteristicaService {

    @Autowired
    private CaracteristicaRepository repository;

    public Caracteristica criarCaracteristica(CaracteristicaDto caracteristicaDto) {
        Caracteristica novaCaracteristica = new Caracteristica();
        novaCaracteristica.setCaracteristica(caracteristicaDto.getCaracteristica());
        return repository.save(novaCaracteristica);
    }
}
