package com.twd.RestoWeb.controller;

import com.twd.RestoWeb.dto.FoodReq;
import com.twd.RestoWeb.dto.ReservationReq;
import com.twd.RestoWeb.dto.UploadRequest;
import com.twd.RestoWeb.entity.Category;
import com.twd.RestoWeb.entity.Food;
import com.twd.RestoWeb.repository.CategoryRepository;
import com.twd.RestoWeb.service.FoodService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
public class FoodController {

    @Autowired
    private FoodService foodService;

    private  CategoryRepository categoryRepository; // Ensure you have this field

    @Autowired
    public FoodController(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }



    @GetMapping("auth/food/all")
    public List<Food> list() {
        return foodService.getAllFoods();
    }

    @PostMapping("/admin/food/create")
    public ResponseEntity<?> addFood(@RequestBody FoodReq foodReq) {
        FoodReq foodReq1 = foodService.saveFood(foodReq);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(foodReq1);

    }

    @GetMapping("/adminuser/{id}")
    public ResponseEntity<?> get(@PathVariable Integer id) {
        Optional<Optional<Food>> food = Optional.ofNullable(foodService.getFoodById(id));
        return ResponseEntity.ok(food);
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<?> update(@RequestBody Food food, @PathVariable Integer id) {
//        Optional<Food> existFood = foodService.getFoodById(id);
//        if (existFood != null) {
//            food.setFoodId(id);
//            foodService.saveFood(food);
//            return ResponseEntity.ok().body("Food has been updated.");
//        }
//        return ResponseEntity.notFound().build();
//    }

    @DeleteMapping("/admin/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        foodService.deleteFood(id);
        return ResponseEntity.ok().body("Food has been deleted.");
    }


}



