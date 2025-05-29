import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Gourmet Haven</div>
        <div className="nav-links">
          <button onClick={() => setActiveSection('home')}>Home</button>
          <button onClick={() => setActiveSection('menu')}>Menu</button>
          <button onClick={() => setActiveSection('hours')}>Hours</button>
          <button onClick={() => setActiveSection('reservations')}>Reservations</button>
        </div>
      </nav>

      <main className="main-content">
        {activeSection === 'home' && (
          <div className="home-section">
            <h1>Welcome to Gourmet Haven</h1>
            <p>Experience culinary excellence in a warm and inviting atmosphere</p>
          </div>
        )}

        {activeSection === 'menu' && (
          <div className="menu-section">
            <h2>Our Menu</h2>
            <div className="menu-categories">
              <div className="menu-category">
                <h3>Starters</h3>
                <ul>
                  <li>Bruschetta - $8</li>
                  <li>Caesar Salad - $10</li>
                  <li>Soup of the Day - $7</li>
                </ul>
              </div>
              <div className="menu-category">
                <h3>Main Courses</h3>
                <ul>
                  <li>Grilled Salmon - $24</li>
                  <li>Beef Tenderloin - $28</li>
                  <li>Vegetable Risotto - $18</li>
                </ul>
              </div>
              <div className="menu-category">
                <h3>Desserts</h3>
                <ul>
                  <li>Tiramisu - $8</li>
                  <li>Chocolate Lava Cake - $9</li>
                  <li>Crème Brûlée - $8</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'hours' && (
          <div className="hours-section">
            <h2>Opening Hours</h2>
            <div className="hours-grid">
              <div className="hours-day">
                <h3>Monday - Thursday</h3>
                <p>11:00 AM - 10:00 PM</p>
              </div>
              <div className="hours-day">
                <h3>Friday - Saturday</h3>
                <p>11:00 AM - 11:00 PM</p>
              </div>
              <div className="hours-day">
                <h3>Sunday</h3>
                <p>10:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'reservations' && (
          <div className="reservations-section">
            <h2>Make a Reservation</h2>
            <form className="reservation-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" required />
              </div>
              <div className="form-group">
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" required />
              </div>
              <div className="form-group">
                <label htmlFor="guests">Number of Guests:</label>
                <input type="number" id="guests" min="1" max="10" required />
              </div>
              <button type="submit" className="submit-btn">Book Table</button>
            </form>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2024 Gourmet Haven. All rights reserved.</p>
        <p>123 Restaurant Street, Foodville, FL 12345</p>
        <p>Phone: (555) 123-4567</p>
      </footer>
    </div>
  )
}

export default App
