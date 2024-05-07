package com.twd.RestoWeb.repository;

import com.twd.RestoWeb.entity.ShopingCarts;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ShopingCartsRepository extends JpaRepository<ShopingCarts,Integer> {

    List<ShopingCarts> findByUsersId(Integer userId);
}
