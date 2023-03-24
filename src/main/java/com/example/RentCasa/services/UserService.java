package com.example.RentCasa.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.RentCasa.models.UserModel;
import com.example.RentCasa.repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public ArrayList<UserModel> getUsers(){
        return (ArrayList<UserModel>) userRepository.findAll();
    }

    public UserModel saveUser(UserModel user){
        return userRepository.save(user);
    }

    public Optional<UserModel> getById(Long id){
        return userRepository.findById(id);
    }

    public ArrayList<UserModel> getByName(String name){
        return  userRepository.findByName(name);
    }

    public boolean deleteUser(long id){
        try {
            userRepository.deleteById(id);
            return true;
        } catch (Exception err) {
            return false;
        }
    }
}
