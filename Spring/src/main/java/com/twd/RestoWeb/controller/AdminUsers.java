package com.twd.RestoWeb.controller;

import com.twd.RestoWeb.dto.ReqRes;
import com.twd.RestoWeb.entity.Feedback;
import com.twd.RestoWeb.entity.OurUsers;
import com.twd.RestoWeb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminUsers {

    @Autowired
    private UserService userService;

    @GetMapping("/{userId}")
    public ResponseEntity<ReqRes> getUserById(@PathVariable int userId) {
        return ResponseEntity.ok((userService.getUserById(userId)));
    }
    @GetMapping("/users")
    public List<OurUsers> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/public/email")
    public String getCurrentUserEmail() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(authentication); //get all details(name,email,password,roles e.t.c) of the user
        System.out.println(authentication.getDetails()); // get remote ip
        System.out.println(authentication.getName()); //returns the email because the email is the unique identifier
        return authentication.getName(); // returns the email
    }
}
