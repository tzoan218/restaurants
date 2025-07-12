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
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");
        User user = userRepository.findByEmail(email);

        if (user != null && user.getPasswordHash().equals(password)) {
            Map<String, Object> response = new java.util.HashMap<>();
            response.put("message", "Login successful");
            response.put("role", user.getRole());
            response.put("userId", user.getUserId());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(java.util.Map.of("error", "Invalid credentials"));
        }
    }
}
