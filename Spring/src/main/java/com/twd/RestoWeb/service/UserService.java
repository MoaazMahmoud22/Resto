package com.twd.RestoWeb.service;

import com.twd.RestoWeb.config.AESEncryption;
import com.twd.RestoWeb.dto.ReqRes;
import com.twd.RestoWeb.entity.OurUsers;
import com.twd.RestoWeb.entity.Reservation;
import com.twd.RestoWeb.repository.OurUserRepo;
import com.twd.RestoWeb.utill.ValidationUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    // Autowire the UserRepository

    @Autowired
    private OurUserRepo ourUserRepo;
    @Autowired
    private JWTUtils jwtUtils;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;


    public List<OurUsers> getAllUsers() {
        return ourUserRepo.findAll();
    }
    // Method to get data for a single user by ID
    public ReqRes getUserById(int userId) {
        ReqRes response = new ReqRes();
        try {
            // Find the user by ID
            Optional<OurUsers> optionalUser = ourUserRepo.findById(userId);
            if (optionalUser.isPresent()) {
                // User found, set response data
                response.setOurUsers(optionalUser.get());
                response.setStatusCode(200);
                response.setMessage("User found successfully");
            } else {
                // User not found
                response.setStatusCode(404);
                response.setMessage("User not found");
            }
        } catch (Exception e) {
            // Error occurred
            response.setStatusCode(500);
            response.setError(e.getMessage());
        }
        return response;
    }

    // Method to update user information by ID
    public ReqRes updateUserById(int userId, OurUsers updatedUser) {
        ReqRes response = new ReqRes();
        try {
            // Find the user by ID
            Optional<OurUsers> optionalUser = ourUserRepo.findById(userId);
            if (optionalUser.isPresent()) {

                // User found, update user information
                OurUsers ourUsers = optionalUser.get();
                ourUsers.setPhone_number(updatedUser.GetPhone_number());
                ourUsers.setFirst_name(updatedUser.getFirst_name());
                ourUsers.setLast_name(updatedUser.getLast_name());
                OurUsers savedUser = ourUserRepo.save(ourUsers);
                // Set response data
                response.setOurUsers(savedUser);
                response.setStatusCode(200);
                response.setMessage("User information updated successfully");
            } else {
                // User not found
                response.setStatusCode(404);
                response.setMessage("User not found");
            }
        } catch (Exception e) {
            // Error occurred
            response.setStatusCode(500);
            response.setError(e.getMessage());
        }
        return response;
    }
}
