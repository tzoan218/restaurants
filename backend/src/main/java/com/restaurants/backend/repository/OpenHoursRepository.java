package com.restaurants.backend.repository;

import com.restaurants.backend.model.OpenHours;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OpenHoursRepository extends JpaRepository<OpenHours, Long> {
} 