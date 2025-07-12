# restaurants
📁 Project Overview
This is a full-stack restaurant management system with a Spring Boot backend (Java) and React frontend (JavaScript/JSX). The application allows customers to view menus and make reservations, while workers can manage the restaurant operations

backend/
├── 📄 pom.xml                          # Maven configuration with dependencies
├── 📄 mvnw                             # Maven wrapper (Unix)
├── 📄 mvnw.cmd                         # Maven wrapper (Windows)
├── 📄 HELP.md                          # Spring Boot help documentation
├── 📄 .gitignore                       # Git ignore rules
├── 📄 .gitattributes                   # Git attributes
├── 📁 .mvn/                            # Maven wrapper files
├── 📁 target/                          # Compiled classes and build artifacts
├── 📁 config/                          # Configuration files
│   └── 📄 database.js                  # Database configuration
├── 📁 database/                        # Database scripts
│   └── 📄 schema.sql                   # Complete database schema
└── 📁 src/
    ├── 📁 main/
    │   ├── 📁 java/com/restaurants/backend/
    │   │   ├── �� BackendApplication.java          # Main Spring Boot application
    │   │   ├── 📁 controller/                      # REST API controllers
    │   │   │   ├── 📄 UserController.java          # User authentication & management
    │   │   │   ├── �� MenuItemController.java      # Menu item CRUD operations
    │   │   │   ├── 📄 ReservationController.java   # Reservation management
    │   │   │   └── 📄 OpenHoursController.java     # Restaurant hours management
    │   │   ├── 📁 model/                           # JPA entity models
    │   │   │   ├── 📄 User.java                    # User entity
    │   │   │   ├── 📄 MenuItem.java                # Menu item entity
    │   │   │   ├── 📄 Reservation.java             # Reservation entity
    │   │   │   └── 📄 OpenHours.java               # Restaurant hours entity
    │   │   └── 📁 repository/                      # Data access layer
    │   │       ├── 📄 UserRepository.java          # User data operations
    │   │       ├── �� MenuItemRepository.java      # Menu item data operations
    │   │       ├── 📄 ReservationRepository.java   # Reservation data operations
    │   │       └── 📄 OpenHoursRepository.java     # Hours data operations
    │   └── 📁 resources/
    │       ├── 📄 application.properties           # Spring Boot configuration
    │       ├── 📁 static/                          # Static web resources
    │       └── 📁 templates/                       # Template files
    └── 📁 test/
        └── 📁 java/com/restaurants/backend/
            └── �� BackendApplicationTests.java     # Unit tests




frontend/
├── 📄 package.json                     # Node.js dependencies and scripts
├── 📄 package-lock.json                # Dependency lock file
├── 📄 vite.config.js                   # Vite build configuration
├── 📄 eslint.config.js                 # ESLint configuration
├── 📄 index.html                       # Main HTML template
├── 📄 README.md                        # Frontend documentation
├── 📁 public/                          # Public assets
│   └── 📄 vite.svg                     # Vite logo
└── 📁 src/
    ├── 📄 main.jsx                     # React application entry point
    ├── 📄 App.jsx                      # Main application component
    ├── 📄 App.css                      # Main application styles
    ├── 📄 index.css                    # Global CSS styles
    ├── 📁 pages/                       # Page components
    │   ├── 📄 Login.jsx                # Worker login page
    │   └── �� WorkerDashboard.jsx      # Worker management dashboard
    └── 📁 assets/                      # Static assets
        ├── 📄 react.svg                # React logo
        └── 📁 images/                  # Restaurant food images
            ├── �� IMG-20230221-WA0000.jpg      # Soup image
            ├── �� IMG-20230909-WA0005.jpg      # Gyros image
            ├── �� IMG-20231014-WA0008.jpeg     # Dessert image
            ├── �� IMG-20231029-WA0004.jpeg     # Carrots image
            ├── �� IMG-20231125-WA0000.jpeg     # Salmon image
            └── �� WhatsApp Image 2025-06-01 at 18.52.47_f88b45ea.jpg




📊 Tables:
├── 👥 users                           # User accounts (customers & workers)
│   ├── user_id (SERIAL PRIMARY KEY)
│   ├── email (VARCHAR UNIQUE)
│   ├── password_hash (VARCHAR)
│   ├── first_name (VARCHAR)
│   ├── last_name (VARCHAR)
│   ├── phone_number (VARCHAR)
│   └── timestamps
│
├── 🍽️ menu_categories                 # Menu categories
│   ├── category_id (SERIAL PRIMARY KEY)
│   ├── name (VARCHAR)
│   └── description (TEXT)
│
├── 🍴 menu_items                      # Individual menu items
│   ├── item_id (SERIAL PRIMARY KEY)
│   ├── category_id (FOREIGN KEY)
│   ├── name (VARCHAR)
│   ├── description (TEXT)
│   ├── price (DECIMAL)
│   └── is_available (BOOLEAN)
│
├── 📅 reservations                    # Customer reservations
│   ├── reservation_id (SERIAL PRIMARY KEY)
│   ├── user_id (FOREIGN KEY)
│   ├── reservation_date (DATE)
│   ├── reservation_time (TIME)
│   ├── number_of_guests (INTEGER)
│   ├── status (VARCHAR) - pending/confirmed/cancelled
│   └── special_requests (TEXT)
│
└── 🕐 restaurant_hours               # Operating hours
    ├── day_id (SERIAL PRIMARY KEY)
    ├── day_name (VARCHAR)
    ├── open_time (TIME)
    ├── close_time (TIME)
    └── is_closed (BOOLEAN) 