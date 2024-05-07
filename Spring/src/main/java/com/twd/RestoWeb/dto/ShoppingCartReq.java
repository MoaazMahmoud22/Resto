package com.twd.RestoWeb.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.twd.RestoWeb.entity.Food;
import com.twd.RestoWeb.entity.OurUsers;
import com.twd.RestoWeb.entity.ShopingCarts;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ShoppingCartReq {
    private int statusCode;
    private String error;
    private String message;
    private Integer CheckoutID;
    private Integer id;
    public String username;
    public String phone_number;
    public String address;
    private boolean Checked;
    private ShopingCarts shopingCarts;
    private int CartId;
    private OurUsers users;
    private Food food;
    private int quantity;
    private Integer foodId;
    private String foodName;

}
