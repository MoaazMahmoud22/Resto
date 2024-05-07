package com.twd.RestoWeb.entity;

import jakarta.persistence.*;
import org.hibernate.mapping.Set;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Entity
@Table(name = "delivery")
public class Delivery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer DeliveryId;
    @Column(name = "Deptureitem")
    public String Deptureitem;
    @Column(name = "arrival")
    public boolean arrival;
//    @OneToMany(mappedBy = "delivery", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
//    private List<Order> orders;
    public Delivery(){

    }
    public Delivery( String  deptureitem, boolean arrival) {

        Deptureitem = deptureitem;
        this.arrival = arrival;
    }

    public Integer getDeliveryId() {
        return DeliveryId;
    }

    public void setDeliveryId(Integer deliveryId) {
        DeliveryId = deliveryId;
    }

    public String getDeptureitem() {
        return Deptureitem;
    }

    public void setDeptureitem(String deptureitem) {
        Deptureitem = deptureitem;
    }

    public boolean isArrival() {
        return arrival;
    }

    public void setArrival(boolean arrival) {
        this.arrival = arrival;
    }

//    public List <Order> getOrders() {
//        return orders;
//    }
//
//    public void setOrders(List <Order> orders) {
//        this.orders = orders;
//    }


    @Override
    public String toString() {
        return "Delivery{" +
                "DeliveryId=" + DeliveryId +
                ", Deptureitem='" + Deptureitem + '\'' +
                ", arrival=" + arrival +
                '}';
    }
}