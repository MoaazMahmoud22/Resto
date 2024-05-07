package com.twd.RestoWeb.entity;

import jakarta.persistence.*;
//import net.minidev.json.JSONArray;
//import org.json.JSONException;
//import org.json.JSONObject;


@Entity
@Table(name = "food")
public class Food {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer foodId;

    @Column(name="dishName")
    private String foodName;

    @Column(name="description")
    private String description;

    @Column(name="price")
    private String price;

    @ManyToOne
    @JoinColumn(name = "category_ID", referencedColumnName = "category_ID")
    private Category category;
    @Column(name="image")
    private String image;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Food(){

    }

    public Food(Integer foodId, String foodName, String description, String price,String image) {
        this.foodId = foodId;
        this.foodName = foodName;
        this.description = description;
        this.price = price;
        this.image=image;

    }

    public Integer getFoodId() {
        return foodId;
    }

    public void setFoodId(Integer foodId) {
        this.foodId = foodId;
    }

    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }


    @Override
    public String toString() {
        return "Food{" +
                "foodId=" + foodId +
                ", foodName='" + foodName + '\'' +
                ", description='" + description + '\'' +
                ", price='" + price + '\'' +

                '}';
    }

}