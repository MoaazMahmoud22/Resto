package com.twd.RestoWeb.controller;

import com.twd.RestoWeb.entity.Delivery;
import com.twd.RestoWeb.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin/Delivery")

public class DeliveryController {
    @Autowired
    private DeliveryService deliveryService;
    @GetMapping
    public List<Delivery> list() {
        return deliveryService.getAllDeliverys();
    }
    @PostMapping("/create")
    public ResponseEntity<?> add(@RequestBody Delivery delivery) {
        deliveryService.saveDelivery(delivery);
        return ResponseEntity.ok().body("New delivery has been saved with ID:" + delivery.getDeliveryId());
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Integer id) {
        Optional<Optional<Delivery>> delivery = Optional.ofNullable(deliveryService.getDeliveryById(id));
        return ResponseEntity.ok(delivery);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@RequestBody Delivery delivery, @PathVariable Integer id) {
        Optional<Delivery> existDelivery = deliveryService.getDeliveryById(id);
        if (existDelivery != null) {
            delivery.setDeliveryId(id);
            deliveryService.saveDelivery(delivery);
            return ResponseEntity.ok().body("Delivery has been updated.");
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        deliveryService.deleteDelivery(id);
        return ResponseEntity.ok().body("Delivery has been deleted.");
    }


}

