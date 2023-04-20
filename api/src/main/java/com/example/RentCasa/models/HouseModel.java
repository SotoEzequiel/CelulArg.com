package com.example.RentCasa.models;
import jakarta.persistence.*;


@Entity
@Table(name = "house")
public class HouseModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    private String name;

    private String image;

    private String floor;

    private Short rooms;

    private Short bathrooms;

    private Integer price;

    private String andress;

    @ManyToOne
    private UserModel user;

    public UserModel getUser() {
        return user;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }

    public String getAndress() {
        return andress;
    }

    public void setAndress(String andress) {
        this.andress = andress;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
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

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getFloor() {
        return floor;
    }

    public void setFloor(String floor) {
        this.floor = floor;
    }

    public Short getRooms() {
        return rooms;
    }

    public void setRooms(Short rooms) {
        this.rooms = rooms;
    }

    public Short getBathrooms() {
        return bathrooms;
    }

    public void setBathrooms(Short bathrooms) {
        this.bathrooms = bathrooms;
    }
}