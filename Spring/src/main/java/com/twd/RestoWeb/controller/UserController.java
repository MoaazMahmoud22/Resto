package com.twd.RestoWeb.controller;

import com.twd.RestoWeb.dto.ReqRes;
import com.twd.RestoWeb.entity.OurUsers;
import com.twd.RestoWeb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{userId}")
    public ResponseEntity<ReqRes> getUserById(@PathVariable int userId) {
        return ResponseEntity.ok((userService.getUserById(userId)));
    }

    @PutMapping("/{userId}")
    public ResponseEntity<ReqRes> updateUserById(@PathVariable int userId, @RequestBody OurUsers updatedUser) {
        return ResponseEntity.ok((userService.updateUserById(userId,updatedUser)));
    }
    @GetMapping("/demo")
    public ResponseEntity<String> demo() {
        return ResponseEntity.ok("Hello from secured url");
    }
}