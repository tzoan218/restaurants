package com.restaurants.backend.controller;

import com.restaurants.backend.model.OpenHours;
import com.restaurants.backend.repository.OpenHoursRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/hours")
public class OpenHoursController {

    @Autowired
    private OpenHoursRepository repo;

    @GetMapping
    public OpenHours getHours() {
        return repo.findAll().stream().findFirst().orElse(null);
    }

    @PutMapping
    public void updateHours(@RequestBody OpenHours updated) {
        OpenHours current = repo.findAll().stream().findFirst().orElse(null);
        if (current != null) {
            updated.setId(current.getId());
        }
        repo.save(updated);
    }
}
