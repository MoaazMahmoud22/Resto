package com.twd.RestoWeb.controller;

import com.twd.RestoWeb.dto.ReservationReq;
import com.twd.RestoWeb.dto.ShoppingCartReq;
import com.twd.RestoWeb.entity.ShopingCarts;
import com.twd.RestoWeb.service.ShopingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/shopping-cart")
public class ShoppingCartController {
    @Autowired
    private ShopingCartService shoppingCartService;



    @GetMapping("/{userId}")
    public ResponseEntity<List<ShopingCarts>> getShoppingCart(@PathVariable Integer userId) {
        List<ShopingCarts> shoppingCart = shoppingCartService.getShoppingCartByUserId(userId);
        return ResponseEntity.ok().body(shoppingCart);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addCart(@RequestBody ShoppingCartReq shoppingCartReq) {
        ShoppingCartReq shoppingCartReq1 = shoppingCartService.SaveShoppingCart(shoppingCartReq);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(shoppingCartReq1);
    }

    @DeleteMapping("/{cartId}")
    public ResponseEntity<Void> removeFromCart(@PathVariable Integer cartId) {
        shoppingCartService.removeFromCart(cartId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/clear/{userId}")
    public ResponseEntity<Void> clearCart(@PathVariable Integer userId) {
        shoppingCartService.clearCart(userId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/checkout/{userId}")
    public ResponseEntity<Void> checkout(@PathVariable Integer userId) {
        shoppingCartService.checkout(userId);
        return ResponseEntity.ok().build();
    }
}
