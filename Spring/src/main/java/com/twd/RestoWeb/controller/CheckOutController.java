package com.twd.RestoWeb.controller;

import com.twd.RestoWeb.dto.CheckoutReq;
import com.twd.RestoWeb.dto.FoodReq;
import com.twd.RestoWeb.entity.Checkout;

import com.twd.RestoWeb.entity.ShopingCarts;
import com.twd.RestoWeb.service.CheckOutService;

import com.twd.RestoWeb.service.ShopingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.sql.SQLIntegrityConstraintViolationException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("user/checkout")

public class CheckOutController {


@Autowired
private CheckOutService checkoutService;


    @Autowired
    private ShopingCartService shoppingCartService;



    @PostMapping("/create")
    public ResponseEntity<?> addCheckout(@RequestBody CheckoutReq checkoutReq) {
        CheckoutReq checkoutReq1 = checkoutService.AddCheckout(checkoutReq);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(checkoutReq1);
    }



    @GetMapping("/{id}")
    public ResponseEntity<Checkout> getCheckout(@PathVariable int checkout_id) {
        return checkoutService.findCheckoutById(checkout_id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }


}