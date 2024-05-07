package com.twd.RestoWeb.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "ShopingCarts")

public class ShopingCarts {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cart_id")
    private int CartId;

    @ManyToOne
    @JoinColumn(name = "User_id",nullable = false)
    private OurUsers users;

    @ManyToOne
    @JoinColumn(name = "food_id",nullable = false)
    private Food food;
    private int quantity;

}