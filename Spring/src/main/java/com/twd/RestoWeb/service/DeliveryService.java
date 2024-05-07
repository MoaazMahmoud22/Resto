package com.twd.RestoWeb.service;

import com.twd.RestoWeb.entity.Delivery;
import com.twd.RestoWeb.repository.DeliveryReposatory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class DeliveryService {
    @Autowired
    private DeliveryReposatory deliveryReposatory;
    public void saveDelivery(Delivery delivery) {

        deliveryReposatory.save(delivery);
    }

    public List<Delivery> getAllDeliverys() {

        return deliveryReposatory.findAll();
    }

    public Optional<Delivery> getDeliveryById(Integer id) {

        return deliveryReposatory.findById(id);
    }

    public void deleteDelivery(Integer id)
    {
        deliveryReposatory.deleteById(id);
    }


}
