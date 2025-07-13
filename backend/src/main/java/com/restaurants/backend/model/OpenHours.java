package com.restaurants.backend.model;

import jakarta.persistence.*;
import java.time.LocalTime;

@Entity
@Table(name = "restaurant_hours")
public class OpenHours {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "day_id")
    private Long id;

    @Column(name = "day_name")
    private String dayName;

    @Column(name = "open_time")
    private LocalTime openTime;

    @Column(name = "close_time")
    private LocalTime closeTime;

    @Column(name = "is_closed")
    private boolean isClosed = false;

    @Column(name = "created_at")
    private java.time.ZonedDateTime createdAt;

    @Column(name = "updated_at")
    private java.time.ZonedDateTime updatedAt;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getDayName() { return dayName; }
    public void setDayName(String dayName) { this.dayName = dayName; }

    public LocalTime getOpenTime() { return openTime; }
    public void setOpenTime(LocalTime openTime) { this.openTime = openTime; }

    public LocalTime getCloseTime() { return closeTime; }
    public void setCloseTime(LocalTime closeTime) { this.closeTime = closeTime; }

    public boolean isClosed() { return isClosed; }
    public void setClosed(boolean closed) { isClosed = closed; }

    public java.time.ZonedDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(java.time.ZonedDateTime createdAt) { this.createdAt = createdAt; }

    public java.time.ZonedDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(java.time.ZonedDateTime updatedAt) { this.updatedAt = updatedAt; }
}
