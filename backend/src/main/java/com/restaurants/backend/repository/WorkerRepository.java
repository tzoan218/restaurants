package com.restaurants.backend.repository;

import com.restaurants.backend.model.Worker;
import org.springframework.data.jpa.repository.JpaRepository;


public interface WorkerRepository extends JpaRepository<Worker, Long> {
    Worker findByEmail(String email); // 🔍 For login check
}
