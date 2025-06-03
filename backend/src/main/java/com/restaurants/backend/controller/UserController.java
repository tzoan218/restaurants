package com.restaurants.backend.controller;

import com.restaurants.backend.model.User;
import com.restaurants.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public boolean login(@RequestBody User loginUser) {
        User user = userRepository.findByEmail(loginUser.getEmail());
        return user != null && user.getPasswordHash().equals(loginUser.getPasswordHash());
    }
}
