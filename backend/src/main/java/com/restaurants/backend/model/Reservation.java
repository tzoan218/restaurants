package com.restaurants.backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "reservations")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reservation_id")
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "reservation_date")
    private LocalDate reservationDate;

    @Column(name = "reservation_time")
    private LocalTime reservationTime;

    @Column(name = "number_of_guests")
    private int numberOfGuests;

    private String status; // should be: "pending", "confirmed", or "cancelled"

    @Column(name = "special_requests")
    private String specialRequests;

    @Column(name = "created_at")
    private java.time.ZonedDateTime createdAt;

    @Column(name = "updated_at")
    private java.time.ZonedDateTime updatedAt;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }

    public LocalDate getReservationDate() { return reservationDate; }
    public void setReservationDate(LocalDate reservationDate) { this.reservationDate = reservationDate; }

    public LocalTime getReservationTime() { return reservationTime; }
    public void setReservationTime(LocalTime reservationTime) { this.reservationTime = reservationTime; }

    public int getNumberOfGuests() { return numberOfGuests; }
    public void setNumberOfGuests(int numberOfGuests) { this.numberOfGuests = numberOfGuests; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getSpecialRequests() { return specialRequests; }
    public void setSpecialRequests(String specialRequests) { this.specialRequests = specialRequests; }

    public java.time.ZonedDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(java.time.ZonedDateTime createdAt) { this.createdAt = createdAt; }

    public java.time.ZonedDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(java.time.ZonedDateTime updatedAt) { this.updatedAt = updatedAt; }
}
