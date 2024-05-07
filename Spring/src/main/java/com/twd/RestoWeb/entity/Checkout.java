package com.twd.RestoWeb.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "Checkout")
public class Checkout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="CheckoutID")
    private Integer CheckoutID;
    @Column(name="username")
    public String username;
    @Column(name="phone_number")
    public String phone_number;
    @Column(name="address")
    public String address;
    @Column(name="Checked")
    private boolean Checked;
    @Column(name="TotalAmount")
    private long TotalAmount;
    @Column(name = "CheckoutDate")
    private Date CheckoutDate;


    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "cart_id")
    private ShopingCarts shopingCarts;



    public long getTotalAmount() {
        return TotalAmount;
    }

    public void setTotalAmount(long totalAmount) {
        TotalAmount = totalAmount;
    }

    public Integer getCheckoutID() {
        return CheckoutID;
    }

    public void setCheckoutID(Integer checkoutID) {
        CheckoutID = checkoutID;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isChecked() {
        return Checked;
    }

    public void setChecked(boolean checked) {
        Checked = checked;
    }

    public ShopingCarts getShopingCarts() {
        return shopingCarts;
    }

    public void setShopingCarts(ShopingCarts shopingCarts) {
        this.shopingCarts = shopingCarts;
    }

    public Date getCheckoutDate() {
        return CheckoutDate;
    }

    public void setCheckoutDate(Date checkoutDate) {
        CheckoutDate = checkoutDate;
    }

    @Override
    public String toString() {
        return "Checkout{" +
                "CheckoutID=" + CheckoutID +
                ", username='" + username + '\'' +
                ", phone_number='" + phone_number + '\'' +
                ", address='" + address + '\'' +
                ", Checked=" + Checked +
                ", TotalAmount=" + TotalAmount +
                ", CheckoutDate=" + CheckoutDate +
                ", shopingCarts=" + shopingCarts +
                '}';
    }
}
