package com.twd.RestoWeb.repository;

import com.twd.RestoWeb.entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FoodRepository extends JpaRepository<Food,Integer> {
        Optional <Food> findByFoodName(String foodName);
}
