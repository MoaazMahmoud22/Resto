package com.twd.RestoWeb.controller;

import com.twd.RestoWeb.entity.Reservation;
import com.twd.RestoWeb.entity.TableResturant;
import com.twd.RestoWeb.service.TableResturantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/auth/table-resturants")
public class TableResturantController {

    @Autowired
    private TableResturantService tableResturantService;

    @GetMapping("all")
    public ResponseEntity<List<TableResturant>> getAllTable() {
        List<TableResturant> tableResturants = tableResturantService.getAllTableResturants();
        return new ResponseEntity<>(tableResturants, HttpStatus.OK);
    }

    // Add TableResturant
    @PostMapping
    public ResponseEntity<TableResturant> addTableResturant(@RequestBody TableResturant tableResturant) {
        TableResturant newTableResturant = tableResturantService.addTableResturant(tableResturant);
        if (newTableResturant != null) {
            return new ResponseEntity<>(newTableResturant, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // Get TableResturant by ID
    @GetMapping("/{id}")
    public ResponseEntity<TableResturant> getTableResturantById(@PathVariable int id) {
        Optional<TableResturant> tableResturant = tableResturantService.getTableResturantById(id);
        return tableResturant.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update TableResturant
    @PutMapping("/{id}")
    public ResponseEntity<TableResturant> updateTableResturant(@PathVariable int id, @RequestBody TableResturant updatedTableResturant) {
        TableResturant tableResturant = tableResturantService.updateTableResturant(id, updatedTableResturant);
        if (tableResturant != null) {
            return new ResponseEntity<>(tableResturant, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete TableResturant
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTableResturant(@PathVariable int id) {
        tableResturantService.deleteTableResturant(id);
        return ResponseEntity.noContent().build();
    }
}

