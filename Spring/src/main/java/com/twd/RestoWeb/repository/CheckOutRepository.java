package com.twd.RestoWeb.repository;


import com.twd.RestoWeb.entity.Checkout;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CheckOutRepository extends JpaRepository<Checkout,Integer> {
    @Query("SELECT c.CheckoutID,f.foodName, sc.quantity, c.Checked, c.CheckoutDate, c.TotalAmount " +
            "FROM ShopingCarts sc " +
            "JOIN Checkout c ON sc.CartId = c.shopingCarts.CartId " +
            "JOIN OurUsers u ON sc.users.id = u.id " +
            "JOIN Food f ON f.foodId = sc.food.foodId")
    List<Object[]> findOrderDetails();



}
