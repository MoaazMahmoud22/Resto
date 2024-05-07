package com.twd.RestoWeb.repository;

import com.twd.RestoWeb.entity.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeliveryReposatory extends JpaRepository<Delivery,Integer> {
}
