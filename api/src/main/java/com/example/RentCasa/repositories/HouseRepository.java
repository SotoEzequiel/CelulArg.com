package com.example.RentCasa.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.RentCasa.models.HouseModel;;


@Repository
public interface HouseRepository extends CrudRepository<HouseModel, Long> {
    public abstract ArrayList<HouseModel> findByName(String name);
}
    

