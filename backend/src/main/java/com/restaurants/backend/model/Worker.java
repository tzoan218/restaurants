package com.restaurants.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    private String email;
    
    @Column(name = "password_hash")
    private String password;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;
    
    @Column(name = "phone_number")
    private String phoneNumber;
    
    private String role; // 'worker' or 'client'
    
    @Column(name = "created_at")
    private java.time.ZonedDateTime createdAt;
    
    @Column(name = "updated_at")
    private java.time.ZonedDateTime updatedAt;

    // ✅ GETTERS AND SETTERS

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
    
    public java.time.ZonedDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(java.time.ZonedDateTime createdAt) { this.createdAt = createdAt; }
    
    public java.time.ZonedDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(java.time.ZonedDateTime updatedAt) { this.updatedAt = updatedAt; }
}
