package com.restaurants.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "menu_items")
public class MenuItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long id;

    @Column(name = "category_id")
    private Long categoryId;

    private String name;
    private String description;
    private double price;

    @Column(name = "is_available")
    private boolean isAvailable = true;

    @Column(name = "created_at")
    private java.time.ZonedDateTime createdAt;

    @Column(name = "updated_at")
    private java.time.ZonedDateTime updatedAt;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getCategoryId() { return categoryId; }
    public void setCategoryId(Long categoryId) { this.categoryId = categoryId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public boolean isAvailable() { return isAvailable; }
    public void setAvailable(boolean available) { isAvailable = available; }

    public java.time.ZonedDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(java.time.ZonedDateTime createdAt) { this.createdAt = createdAt; }

    public java.time.ZonedDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(java.time.ZonedDateTime updatedAt) { this.updatedAt = updatedAt; }
}
