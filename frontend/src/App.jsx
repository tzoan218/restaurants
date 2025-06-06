import { useState, useEffect } from 'react';
import './App.css';
import GyrosImg from './assets/images/IMG-20230909-WA0005.jpg';
import SalmonImg from './assets/images/IMG-20231125-WA0000.jpeg';
import CarrotsImg from './assets/images/IMG-20231029-WA0004.jpeg';
import DessertImg from './assets/images/IMG-20231014-WA0008.jpeg';
import SoupImg from './assets/images/IMG-20230221-WA0000.jpg';

function App() {
  const [userRole, setUserRole] = useState('client');
  const [activeSection, setActiveSection] = useState('home');
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role === 'worker') {
      setUserRole('worker');
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('userRole', 'worker');
    setUserRole('worker');
    setShowLogin(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    setUserRole('client');
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">Gourmet Haven</div>
        <div className="nav-links">
          <button onClick={() => setActiveSection('home')}>Home</button>
          <button onClick={() => setActiveSection('menu')}>Menu</button>
          <button onClick={() => setActiveSection('hours')}>Hours</button>
          <button onClick={() => setActiveSection('reservations')}>Reservations</button>
          {userRole === 'worker' ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={() => setShowLogin(true)}>Employee Login</button>
          )}
        </div>
      </nav>

      {showLogin && userRole !== 'worker' && (
        <div className="login-page">
          <h1>Employee Login</h1>
          <button onClick={handleLogin}>Login as Worker</button>
          <button onClick={() => setShowLogin(false)}>Cancel</button>
        </div>
      )}

      <main className="main-content">
        {userRole === 'client' ? (
          <div className="client-view">
            <h1>Welcome, Client!</h1>
            <p>You can view the menu and place orders here.</p>
          </div>
        ) : (
          <div className="worker-view">
            <h1>Welcome, Worker!</h1>
            <div className="worker-actions">
              <section className="menu-management">
                <h2>Modify Menu</h2>
                <button className="action-btn">+ Add New Menu Item</button>
              </section>

              <section className="reservation-management">
                <h2>Pending Reservations</h2>
                <div className="reservation">
                  <p><strong>John Doe</strong> | 2 guests | 18:00</p>
                  <div>
                    <button className="accept-btn">Accept</button>
                    <button className="reject-btn">Reject</button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {activeSection === 'home' && (
          <div className="home-section">
            <h1>Welcome to Gourmet Haven</h1>
            <p>Experience culinary excellence in a warm and inviting atmosphere</p>
          </div>
        )}

        {activeSection === 'menu' && (
          <div className="menu-section">
            <h2>Our Menu</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, margin: '24px 0' }}>
              <img src={GyrosImg} alt="Gyros" style={{ maxWidth: 160, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
              <img src={SalmonImg} alt="Salmon" style={{ maxWidth: 160, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
              <img src={CarrotsImg} alt="Carrots" style={{ maxWidth: 160, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
              <img src={DessertImg} alt="Dessert" style={{ maxWidth: 160, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
              <img src={SoupImg} alt="Soup" style={{ maxWidth: 160, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }} />
            </div>
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
  );
}

export default App;
