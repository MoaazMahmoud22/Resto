package com.twd.RestoWeb.controller;

import com.twd.RestoWeb.dto.CheckoutReq;
import com.twd.RestoWeb.dto.OrderDetails;
import com.twd.RestoWeb.dto.ReqRes;
import com.twd.RestoWeb.entity.Checkout;
import com.twd.RestoWeb.entity.OurUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.twd.RestoWeb.service.CheckOutService;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("admin/checkout")
public class AdminCheckoutController {
    @Autowired
    CheckOutService checkoutService;

    @DeleteMapping("/{checkoutId}")
    public ResponseEntity<Void> deleteCheckout(@PathVariable Integer checkoutId) {
        checkoutService.deleteCheckout(checkoutId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public List<Checkout> getAllCheckouts() {
        return checkoutService.findAllCheckouts();
    }

    @PutMapping("/{checkId}")
    public String updateCheckout(@PathVariable int checkId) {
        Optional<Checkout>checkout = checkoutService.findCheckoutById(checkId);
        if(!checkout.isPresent()){
            return "Your id Not Correct or not exist";
        }
            checkoutService.UpdateCheckout(checkId);
            return "updated";
    }

    @GetMapping("/details")
    public List<OrderDetails> getOrderDetails() {
        return checkoutService.findOrderDetails();
    }

}
