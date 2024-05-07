package com.twd.RestoWeb.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class OrderDetails {
    private Long checkoutId;
    private String foodName;
    private Integer quantity;
    private Boolean checked;
    private Date checkoutDate;
    private Long totalAmount;
}
