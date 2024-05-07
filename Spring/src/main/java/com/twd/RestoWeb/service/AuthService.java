package com.twd.RestoWeb.service;

import com.twd.RestoWeb.config.AESEncryption;
import com.twd.RestoWeb.dto.ReqRes;
import com.twd.RestoWeb.entity.OurUsers;
import com.twd.RestoWeb.entity.Tokens;
import com.twd.RestoWeb.repository.OurUserRepo;
import com.twd.RestoWeb.repository.TokenRepository;
import com.twd.RestoWeb.service.JWTUtils;
import com.twd.RestoWeb.utill.ValidationUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.HashMap;
import java.util.List;

@Service
public class AuthService {

    @Autowired
    private OurUserRepo ourUserRepo;
    @Autowired
    private JWTUtils jwtUtils;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenRepository tokenRepository;

    public ReqRes signUp(ReqRes registrationRequest) {
        ReqRes resp = new ReqRes();
        try {

            // Check if the username is already used
            if (ourUserRepo.existsByUsername(registrationRequest.getUsername())) {
                resp.setStatusCode(400); // Bad request status code
                resp.setError("Username is already used");
                return resp;
            }
            if (!ValidationUtils.isValidEmail(registrationRequest.getEmail())) {
                resp.setError("Email is not valid.");
                return resp;
            }if (!ValidationUtils.isValidPhoneNumber(registrationRequest.getPhone_number())) {
                resp.setError("Phone number is not valid");
                return resp;
            }
            if (ourUserRepo.existsByEmail(registrationRequest.getEmail())) {
                resp.setStatusCode(400); // Bad request status code
                resp.setError("Email is already used");
                return resp;
            }
            OurUsers ourUsers = new OurUsers();
            ourUsers.setEmail(registrationRequest.getEmail());
            ourUsers.setUsername(registrationRequest.getUsername());
            ourUsers.setFirst_name(registrationRequest.getFirst_name());
            ourUsers.setLast_name(registrationRequest.getLast_name());
            ourUsers.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
            ourUsers.setRole(registrationRequest.getRole());
            ourUsers.setPhone_number(registrationRequest.getPhone_number());
            OurUsers ourUserResult = ourUserRepo.save(ourUsers);
            if (ourUserResult != null && ourUserResult.getId() > 0) {

                var jwt = jwtUtils.generateToken(ourUsers);
//                saveUserToken(jwt, ourUsers);
                resp.setToken(jwt);
                resp.setOurUsers(ourUserResult);
                resp.setEmail(ourUsers.getEmail()); // Add email to the response
                resp.setUsername(ourUsers.getUsername()); // Add username to the response
                resp.setMessage("User Saved Successfully");
                resp.setStatusCode(200);
            }
        } catch (Exception e) {
            resp.setStatusCode(500);
            resp.setError(e.getMessage());
        }
        return resp;

    }

    public ReqRes signIn(ReqRes signinRequest) {
        ReqRes response = new ReqRes();

        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signinRequest.getEmail(), signinRequest.getPassword()));
            OurUsers user = ourUserRepo.findByEmail(signinRequest.getEmail()).orElseThrow();
            System.out.println("USER IS: " + user);
            var jwt = jwtUtils.generateToken(user);
            var refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), user);
            response.setStatusCode(200);
            response.setToken(jwt);
            response.setRefreshToken(refreshToken);
            revokeAllTokenByUser(user);
//            saveUserToken(jwt, user);
            response.setUser_id(user.getId());
            response.setEmail(user.getUsername());
            response.setPhone_number(user.GetPhone_number());
            response.setExpirationTime("24Hr");
            response.setMessage("Successfully Signed In");
            response.setRole(user.getRole()); // Include the user's role in the response
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setError(e.getMessage());
        }
        return response;
    }



    public ReqRes refreshToken(ReqRes refreshTokenReqiest) {
        ReqRes response = new ReqRes();
        String ourEmail = jwtUtils.extractUsername(refreshTokenReqiest.getToken());
        OurUsers users = ourUserRepo.findByEmail(ourEmail).orElseThrow();
        if (jwtUtils.isTokenValid(refreshTokenReqiest.getToken(), users)) {
            var jwt = jwtUtils.generateToken(users);
            response.setStatusCode(200);
            response.setToken(jwt);
            response.setRefreshToken(refreshTokenReqiest.getToken());
            response.setExpirationTime("24Hr");
            response.setMessage("Successfully Refreshed Token");
        }
        response.setStatusCode(500);
        return response;
    }

    private void revokeAllTokenByUser(OurUsers user) {
        List<Tokens> validTokens = tokenRepository.findAllTokensByUser(user.getId());
        if (validTokens.isEmpty()) {
            return;
        }

        validTokens.forEach(t -> {
            t.setLoggedOut(true);
        });

        tokenRepository.saveAll(validTokens);
    }

    private void saveUserToken(String jwt, OurUsers user) {
        Tokens token = new Tokens();
        token.setToken(jwt);
        token.setLoggedOut(false);
        token.setUser(user);
        tokenRepository.save(token);
    }


}