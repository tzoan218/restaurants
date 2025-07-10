package com.restaurants.backend.controller;

import com.restaurants.backend.model.MenuItem;
import com.restaurants.backend.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
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
}

