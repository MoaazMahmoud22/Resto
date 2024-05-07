package com.twd.RestoWeb.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.twd.RestoWeb.entity.Checkout;
import com.twd.RestoWeb.entity.Food;
import com.twd.RestoWeb.entity.ShopingCarts;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CheckoutReq {
    private int statusCode;
    private String error;
    private String message;
    private Integer CheckoutID;
    public String username;
    public String phone_number;
    public String address;
    private boolean Checked;
    private ShopingCarts shopingCarts;
    private int CartId;
    private Checkout checkout;
    private Food food;
}
