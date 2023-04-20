package com.example.RentCasa.models;


import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    private String password;

    private String bornDate;

    private String telNum;

    private Integer dni;

    @OneToMany(mappedBy = "user")
    List<HouseModel> houses;


    public List<HouseModel> getHouses() {
        return houses;
    }
    public void setHouses(List<HouseModel> houses) {
        this.houses = houses;
    }
    public Integer getDni() {
        return dni;
    }
    public void setDni(Integer dni) {
        this.dni = dni;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String userName) {
        this.name = userName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getBornDate() {
        return bornDate;
    }
    public void setBornDate(String bornDate) {
        this.bornDate = bornDate;
    }
    public String getTelNum() {
        return telNum;
    }
    public void setTelNum(String telNum) {
        this.telNum = telNum;
    }
    
}
