package com.twd.RestoWeb.controller;

import com.twd.RestoWeb.dto.ReservationReq;
import com.twd.RestoWeb.dto.ReservationWithTableName;
import com.twd.RestoWeb.entity.Category;
import com.twd.RestoWeb.entity.Reservation;
import com.twd.RestoWeb.entity.TableResturant;
import com.twd.RestoWeb.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @GetMapping("admin/allReservaion")
    public ResponseEntity<List<Reservation>> getAllReservations() {
        List<Reservation> reservations = reservationService.getAllReservations();
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }
    @PostMapping("adminuser/addReservaion")
    public ResponseEntity<?> addReservation(@RequestBody ReservationReq reservation) {
        ReservationReq reservation1 = reservationService.addReservation(reservation);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(reservation1);


    }

    // Get Reservation by ID
    @GetMapping("/{id}")
    public ResponseEntity<Reservation> getReservationById(@PathVariable int id) {
        Optional<Reservation> reservation = reservationService.getReservationById(id);
        return reservation.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update Reservation
    @PutMapping("/{id}")
    public ResponseEntity<Reservation> updateReservation(@PathVariable int id, @RequestBody Reservation updatedReservation) {
        Reservation reservation = reservationService.updateReservation(id, updatedReservation);
        if (reservation != null) {
            return new ResponseEntity<>(reservation, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete Reservation
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReservation(@PathVariable int id) {
        reservationService.deleteReservation(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/auth/reservation/dates/{tableId}")
    public ResponseEntity<List<ReservationWithTableName>> findDatesWithTableNameByTableId(@PathVariable String tableId) {
        List<ReservationWithTableName> reservations = reservationService.findDatesByTableId(tableId);
        if (!reservations.isEmpty()) {
            return ResponseEntity.ok(reservations);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
}
