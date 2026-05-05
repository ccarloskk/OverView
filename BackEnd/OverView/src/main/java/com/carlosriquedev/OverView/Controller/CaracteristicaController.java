package com.carlosriquedev.OverView.Controller;

import com.carlosriquedev.OverView.Dto.CaracteristicaDto;
import com.carlosriquedev.OverView.Model.Caracteristica;
import com.carlosriquedev.OverView.Service.CaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/caracteristicas")
@CrossOrigin(origins = "*")
public class CaracteristicaController {

    @Autowired
    private CaracteristicaService service;

    @PostMapping("/criarCaracteristica")
    public Caracteristica criarCaracteristica(@RequestBody CaracteristicaDto caracteristica) {
        return service.criarCaracteristica(caracteristica);
    }
}
