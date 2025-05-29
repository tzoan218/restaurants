-- Create database
CREATE DATABASE restaurant_db;

-- Connect to the database
\c restaurant_db;

-- Create tables
-- Users table for authentication
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Menu categories
CREATE TABLE menu_categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Menu items
CREATE TABLE menu_items (
    item_id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES menu_categories(category_id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Reservations
CREATE TABLE reservations (
    reservation_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    reservation_date DATE NOT NULL,
    reservation_time TIME NOT NULL,
    number_of_guests INTEGER NOT NULL,
    status VARCHAR(20) DEFAULT 'pending', -- pending, confirmed, cancelled
    special_requests TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Restaurant hours
CREATE TABLE restaurant_hours (
    day_id SERIAL PRIMARY KEY,
    day_name VARCHAR(20) NOT NULL,
    open_time TIME NOT NULL,
    close_time TIME NOT NULL,
    is_closed BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert default menu categories
INSERT INTO menu_categories (name, description) VALUES
    ('Starters', 'Appetizing beginning to your meal'),
    ('Main Courses', 'Our signature dishes'),
    ('Desserts', 'Sweet endings to your dining experience');

-- Insert sample menu items
INSERT INTO menu_items (category_id, name, description, price) VALUES
    (1, 'Bruschetta', 'Toasted bread topped with tomatoes, garlic, and fresh basil', 8.00),
    (1, 'Caesar Salad', 'Crisp romaine lettuce with Caesar dressing, croutons, and parmesan', 10.00),
    (1, 'Soup of the Day', 'Chef''s daily special soup', 7.00),
    (2, 'Grilled Salmon', 'Fresh Atlantic salmon with seasonal vegetables', 24.00),
    (2, 'Beef Tenderloin', 'Premium cut with red wine reduction sauce', 28.00),
    (2, 'Vegetable Risotto', 'Creamy Arborio rice with seasonal vegetables', 18.00),
    (3, 'Tiramisu', 'Classic Italian dessert with coffee and mascarpone', 8.00),
    (3, 'Chocolate Lava Cake', 'Warm chocolate cake with a molten center', 9.00),
    (3, 'Crème Brûlée', 'Classic French vanilla custard with caramelized sugar', 8.00);

-- Insert restaurant hours
INSERT INTO restaurant_hours (day_name, open_time, close_time) VALUES
    ('Monday', '11:00', '22:00'),
    ('Tuesday', '11:00', '22:00'),
    ('Wednesday', '11:00', '22:00'),
    ('Thursday', '11:00', '22:00'),
    ('Friday', '11:00', '23:00'),
    ('Saturday', '11:00', '23:00'),
    ('Sunday', '10:00', '21:00');

-- Create indexes for better performance
CREATE INDEX idx_menu_items_category ON menu_items(category_id);
CREATE INDEX idx_reservations_user ON reservations(user_id);
CREATE INDEX idx_reservations_date ON reservations(reservation_date);
CREATE INDEX idx_users_email ON users(email);

-- Create function to update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updating timestamps
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_menu_items_updated_at
    BEFORE UPDATE ON menu_items
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reservations_updated_at
    BEFORE UPDATE ON reservations
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_restaurant_hours_updated_at
    BEFORE UPDATE ON restaurant_hours
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 