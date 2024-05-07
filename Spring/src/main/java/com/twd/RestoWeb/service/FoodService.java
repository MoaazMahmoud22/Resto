package com.twd.RestoWeb.service;
import com.twd.RestoWeb.dto.FoodReq;
import com.twd.RestoWeb.entity.*;
import com.twd.RestoWeb.repository.CategoryRepository;
import com.twd.RestoWeb.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodService {
    @Autowired
    private FoodRepository foodRepository;

    @Autowired
    private CategoryRepository categoryRepository;
    public FoodReq saveFood(FoodReq foodReq) {
        FoodReq resp = new FoodReq();
        try {
            Category category =categoryRepository.findByNameCategory(foodReq.getNameCategory());
            if (category == null) {
                resp.setStatusCode(400); // Bad request status code
                resp.setError("Category Not Found");
                return resp;
            }
            Optional<Food> food=foodRepository.findByFoodName(foodReq.getFoodName());
            if (food.isPresent()) {
                resp.setStatusCode(400); // Bad request status code
                resp.setError("Food already exist");
                return resp;
            }
            // Set the user in the reservation
            Food foodReq1=new Food();

            foodReq1.setFoodName(foodReq.getFoodName());
            foodReq1.setImage(foodReq.getImage());
            foodReq1.setCategory(category);
            foodReq1.setDescription(foodReq.getDescription());
            foodReq1.setPrice(foodReq.getPrice());

            Food foodResult = foodRepository.save(foodReq1);
            if (foodResult != null && foodResult.getFoodId() > 0) {
                resp.setFood(foodResult);
                resp.setMessage("Food Saved Successfully");
                resp.setStatusCode(200);
            }
        }
        catch (Exception e){
            resp.setStatusCode(500);
            resp.setError(e.getMessage());
        }
        return resp;

    }

    public List<Food> getAllFoods() {

        return foodRepository.findAll();
    }

    public Optional<Food> getFoodById(Integer id) {

        return foodRepository.findById(id);
    }

    public void deleteFood(Integer id)
    {
        foodRepository.deleteById(id);
    }
}

