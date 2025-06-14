package com.restaurants.backend.controller;

import com.restaurants.backend.model.User;
import com.restaurants.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173") // Allow frontend running on this port to access backend
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // === LOGIN endpoint ===
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> loginRequest) {
        // 📌 1. Extract email and password from JSON body
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");

        // 📌 2. Look for the user by email in the database
        User user = userRepository.findByEmail(email);

        if (user != null) {
            // 📌 3. Compare password with what's stored in the database
            if (user.getPasswordHash().equals(password)) {
                // ✅ Match: send OK status
                return ResponseEntity.ok("Login successful");
            } else {
                // ❌ Password wrong
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
            }
        } else {
            // ❌ No user with that email
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
        }
    }
}
