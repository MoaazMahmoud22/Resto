package com.twd.RestoWeb.service;

import com.twd.RestoWeb.dto.FoodReq;
import com.twd.RestoWeb.dto.ShoppingCartReq;
import com.twd.RestoWeb.entity.*;
import com.twd.RestoWeb.repository.FoodRepository;
import com.twd.RestoWeb.repository.OurUserRepo;
import com.twd.RestoWeb.repository.ShopingCartsRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ShopingCartService {
    @Autowired
    private ShopingCartsRepository cartRepository;
    @Autowired
    private OurUserRepo userRepository;
    @Autowired
    private FoodRepository foodRepository;


    public List<ShopingCarts> getShoppingCartByUserId(Integer userId) {
        return cartRepository.findByUsersId(userId);
    }

    public ShopingCarts findShoppingCartById(Integer cartId) {
        return cartRepository.findById(cartId).orElse(null);}


    public ShoppingCartReq SaveShoppingCart(ShoppingCartReq shoppingCartReq) {
        ShoppingCartReq resp = new ShoppingCartReq();
        try {
            Optional<OurUsers> optionalUser = userRepository.findByEmail(shoppingCartReq.getUsername());
            if (!optionalUser.isPresent()) {
                resp.setStatusCode(400); // Bad request status code
                resp.setError("User Not Found");
                return resp;
            }
            Optional<Food> food=foodRepository.findByFoodName(shoppingCartReq.getFoodName());
            if (!food.isPresent()) {
                resp.setStatusCode(400); // Bad request status code
                resp.setError("Food not Exist");
                return resp;
            }
            // Set the user in the reservation
            ShopingCarts shopingCarts = new ShopingCarts();
            shopingCarts.setFood(food.get());
            shopingCarts.setQuantity(shoppingCartReq.getQuantity());
            shopingCarts.setUsers(optionalUser.get());

            ShopingCarts shopingCartResult = cartRepository.save(shopingCarts);
            if (shopingCartResult != null && shopingCartResult.getCartId() > 0) {
                resp.setShopingCarts(shopingCartResult);
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




    public void removeFromCart(Integer cartId) {
        cartRepository.deleteById(cartId);
    }


    public void clearCart(Integer userId) {
        cartRepository.deleteById(userId);
    }


  }





