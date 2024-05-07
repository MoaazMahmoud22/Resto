package com.twd.RestoWeb.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.twd.RestoWeb.entity.Reservation;
import lombok.Data;

import java.util.Date;

@Data
//@JsonIgnoreProperties(ignoreUnknown = true)
//@JsonInclude(JsonInclude.Include.NON_NULL)
public class ReservationReq {
    private int statusCode;
    private Date date_reservation;
    private int num_of_guests;
    private String phone_number;
    private  String username;
    private int user_id;
    private String error;
    private String Message;
    private String nameOfTable;
    private String email;
    private Reservation reservation;
}
