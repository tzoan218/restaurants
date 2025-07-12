package com.restaurants.backend.controller;

import com.restaurants.backend.model.Reservation;
import com.restaurants.backend.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    private ReservationRepository repo;

    @GetMapping("/pending")
    public List<Reservation> getPending() {
        return repo.findByStatus("pending");
    }

    @PostMapping("/{id}/accept")
    public void accept(@PathVariable Long id) {
        Reservation r = repo.findById(id).orElseThrow();
        r.setStatus("accepted");
        repo.save(r);
    }

    @PostMapping("/{id}/decline")
    public void decline(@PathVariable Long id) {
        Reservation r = repo.findById(id).orElseThrow();
        r.setStatus("declined");
        repo.save(r);
    }
}

