package com.example.RentCasa.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.RentCasa.models.HouseModel;
import com.example.RentCasa.repositories.HouseRepository;

@Service
public class HouseService {
    @Autowired
    HouseRepository houseRepository;

    public ArrayList<HouseModel> getHouses(){
        return (ArrayList<HouseModel>) houseRepository.findAll();
    }

    public HouseModel saveHouse(HouseModel house){
        return houseRepository.save(house);
    }

    public Optional<HouseModel> getById(Long id){
        return houseRepository.findById(id);
    }

    public ArrayList<HouseModel> getByName(String name){
        return houseRepository.findByName(name);
    }

    public boolean deleteHouse(long id){
        try {
            houseRepository.deleteById(id);
            return true;
        } catch (Exception err) {
            return false;
        }
    }

}
