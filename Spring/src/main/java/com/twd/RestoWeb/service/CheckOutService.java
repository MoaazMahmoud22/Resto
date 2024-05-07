package com.twd.RestoWeb.service;

import com.twd.RestoWeb.dto.CheckoutReq;
import com.twd.RestoWeb.dto.OrderDetails;
import com.twd.RestoWeb.entity.Checkout;

import com.twd.RestoWeb.entity.Food;
import com.twd.RestoWeb.entity.ShopingCarts;
import com.twd.RestoWeb.repository.CheckOutRepository;
import com.twd.RestoWeb.repository.ShopingCartsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.*;

@Service
public class CheckOutService {


    @Autowired
    private CheckOutRepository checkoutRepository;
    @Autowired
    private ShopingCartsRepository shopingCartsRepository;


    public CheckoutReq AddCheckout(CheckoutReq checkoutReq) {
        CheckoutReq resp = new CheckoutReq();
        try {
            Optional<ShopingCarts> shopingCarts1 = shopingCartsRepository.findById(checkoutReq.getCartId());
            if (!shopingCarts1.isPresent()) {
                resp.setStatusCode(400);
                resp.setError("Cart_id not found");
                return resp;
            }


            // Set the user in the Checkout
            Checkout checkout = new Checkout();

            // Retrieve the actual Food object
            ShopingCarts shopingCarts = shopingCarts1.get();
            Food food = shopingCarts.getFood();

            checkout.setChecked(false);
            checkout.setPhone_number(checkoutReq.getPhone_number());
            checkout.setShopingCarts(shopingCarts); // Use the retrieved shopingCarts object directly
            checkout.setUsername(checkoutReq.getUsername());
            checkout.setAddress(checkoutReq.getAddress());
            long price = Long.parseLong(food.getPrice());
            long quantity=shopingCarts.getQuantity();
            long TOTAL= price*quantity;
            checkout.setTotalAmount(TOTAL);
            checkout.setCheckoutDate(new Date());

            Checkout checkoutResult = checkoutRepository.save(checkout);
            if (checkoutResult != null && checkoutResult.getCheckoutID() > 0) {
                resp.setCheckout(checkoutResult);
                resp.setMessage("Checkout Saved Successfully");
                resp.setStatusCode(200);
            }
        } catch (Exception e) {
            resp.setStatusCode(500);
            resp.setError(e.getMessage());
        }
        return resp;
    }

    public void UpdateCheckout(int checkID) {
       Optional<Checkout> checkout = checkoutRepository.findById(checkID);
       Checkout checkout1 = checkout.get();
       checkout1.setChecked(true);
        checkoutRepository.save(checkout1);
    }


    public ShopingCarts findShoppingCartById(Integer cartId) {
        return shopingCartsRepository.findById(cartId).orElse(null);
    }
    public List<Checkout> findAllCheckouts() {
        return checkoutRepository.findAll();
    }

    public List<OrderDetails> findOrderDetails() {
        List<Object[]> resultList = checkoutRepository.findOrderDetails();
        List<OrderDetails> orderDetailsList = new ArrayList<>();

        for (Object[] result : resultList) {
            OrderDetails orderDetails = new OrderDetails();
            orderDetails.setCheckoutId(result[0] != null ? ((Number) result[0]).longValue() : null);
            orderDetails.setFoodName((String) result[1]);
            orderDetails.setQuantity(result[2] != null ? ((Number) result[2]).intValue() : null);
            orderDetails.setChecked(result[3] != null ? (Boolean) result[3] : null);
            orderDetails.setCheckoutDate((Date) result[4]);
            orderDetails.setTotalAmount((Long) result[5]);
            orderDetailsList.add(orderDetails);
        }

        return orderDetailsList;
    }
    public Optional<Checkout> findCheckoutById(Integer orders_food_id) {
        return checkoutRepository.findById(orders_food_id);
    }

    public void deleteCheckout(Integer id) {

        checkoutRepository.deleteById(id);
    }


}