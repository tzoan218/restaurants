package com.restaurants.backend.controller;

import com.restaurants.backend.model.Worker;
import com.restaurants.backend.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;   
import java.util.Map;

@RestController
@RequestMapping("/api/workers")
@CrossOrigin(origins = "http://localhost:5173") // our localhost
public class WorkerController {
  
    @Autowired
    private WorkerRepository workerRepo;

    // === LOGIN endpoint ===
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Map<String, String> loginRequest) {
        // 📌 1. Extract email and password from JSON body
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");

        // 📌 2. Look for the worker by email in the database
        Worker worker = workerRepo.findByEmail(email);

        // 📌 3. Check if worker exists
        if (worker == null) {
            return ResponseEntity.status(401).body("User not found");
        }

        // 📌 4. Check if password matches
        if (!worker.getPassword().equals(password)) {
            return ResponseEntity.status(401).body("Invalid password");
        }

        return ResponseEntity.ok("Login successful");
    }
}
