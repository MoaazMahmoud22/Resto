package com.twd.RestoWeb.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "TableResturant")
public class TableResturant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int resturantTable_id;
    private String nameOfTable;

    @OneToMany(mappedBy = "tableResturant", cascade = CascadeType.ALL)
    private Set<Reservation> reservations;

}
