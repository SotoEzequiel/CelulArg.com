package com.example.RentCasa.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.RentCasa.models.UserModel;

@Repository
public interface UserRepository extends CrudRepository<UserModel, Long>{
    public abstract ArrayList<UserModel> findByName(String name);
}
