package com.twd.RestoWeb.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.twd.RestoWeb.entity.Category;
import com.twd.RestoWeb.entity.Food;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FoodReq {
    private int statusCode;
    private String error;
    private String message;
    private String foodName;
    private String description;
    private String price;
    private String nameCategory;
    private Category category;
    private Food food;
    private String image;

}
