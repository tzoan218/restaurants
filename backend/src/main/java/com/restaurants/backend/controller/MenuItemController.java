package com.restaurants.backend.controller;

import com.restaurants.backend.model.MenuItem;
import com.restaurants.backend.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "http://localhost:5173")  // 👈 A
public class MenuItemController {

    @Autowired
    private MenuItemRepository repo;

    @GetMapping
    public List<MenuItem> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public MenuItem create(@RequestBody MenuItem item) {
        return repo.save(item);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteMenuItem(@PathVariable Long id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

