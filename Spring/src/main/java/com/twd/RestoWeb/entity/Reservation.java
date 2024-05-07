package com.twd.RestoWeb.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "Reservation")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reservation_id;

    // Changed from username to OurUsers
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Assuming user_id is the foreign key column name
    private OurUsers user;

    private Date date_reservation;
    private int num_of_guests;
    private String phone_number;

    @ManyToOne
    @JoinColumn(name = "resturantTable_id", nullable = false)
    private TableResturant tableResturant;
}
