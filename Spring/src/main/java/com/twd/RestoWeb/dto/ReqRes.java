package com.twd.RestoWeb.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.twd.RestoWeb.entity.OurUsers;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ReqRes {

    private int statusCode;
    private int user_id;
    private String Phone_number;
    private String error;
    private String message;
    private String token;
    private String refreshToken;
    private String expirationTime;
    private String name;
    private String username;
    private String first_name;
    private String last_name;
    private String email;
    private String role;
    private String password;
    private OurUsers ourUsers;
}
