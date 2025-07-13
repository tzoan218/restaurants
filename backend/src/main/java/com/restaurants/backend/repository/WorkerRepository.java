package com.restaurants.backend.repository;

import com.restaurants.backend.model.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface WorkerRepository extends JpaRepository<Worker, Long> {
    @Query("SELECT w FROM Worker w WHERE w.email = :email AND w.role = 'worker'")
    Worker findByEmail(@Param("email") String email); // 🔍 For login check - only workers
}
