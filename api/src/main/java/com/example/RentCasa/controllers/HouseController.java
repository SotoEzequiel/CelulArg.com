package com.example.RentCasa.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.RentCasa.models.HouseModel;
import com.example.RentCasa.services.HouseService;

@RestController
@RequestMapping("/house")
public class HouseController {
    @Autowired
    HouseService houseService;

    @GetMapping()
    public ArrayList<HouseModel> getHouse(){
        return houseService.getHouses();
    }

    @PostMapping()
    public HouseModel saveHouse(@RequestBody HouseModel house){
        return this.houseService.saveHouse(house);
    }

    @GetMapping( path = "/{id}")
    public Optional<HouseModel> getHouseById(@PathVariable("id") long id){
        return this.houseService.getById(id);
    } 

    @GetMapping("/query")
    public ArrayList<HouseModel> getHouseByName(@RequestParam("name") String name){
        return this.houseService.getByName(name);
    }

    @DeleteMapping( path = "/{id}")
    public String deleteById(@PathVariable("id") Long id){
        boolean ok = this.houseService.deleteHouse(id);
        if (ok) {
            return "Delete House with id "+ id;
        } else {
            return "Can't delete House with id "+ id;
        }
    }
}
