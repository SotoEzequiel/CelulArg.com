package com.example.RentCasa.controllers;

import com.example.RentCasa.models.UserModel;

import com.example.RentCasa.services.UserService;

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

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping()
    public ArrayList<UserModel> getUser(){
        return userService.getUsers();
    }

     @PostMapping()
     public UserModel saveUser(@RequestBody UserModel user){
        return this.userService.saveUser(user);
     }
     @GetMapping( path = "/{id}")
     public Optional<UserModel> getUserById(@PathVariable("id") long id){
        return this.userService.getById(id);
     }

     @GetMapping("/query")
     public ArrayList<UserModel> getUserByName(@RequestParam("name") String name){
        return this.userService.getByName(name);
     }

     @DeleteMapping( path = "/{id}")
     public String deleteById(@PathVariable("id") Long id){
        boolean ok = this.userService.deleteUser(id);
        if(ok){
            return "Delete User with id "+ id;
        }else{
            return "Can't delete User with id "+ id;
        }
     }
}
