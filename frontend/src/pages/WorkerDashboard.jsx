import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WorkerDashboard.css';


const API_BASE_URL = 'http://localhost:8080';

// === 📋 Component: Reservations Management ===
// This handles fetching, accepting, and declining pending reservations
const ReservationsManagement = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🧠 Fetch reservations from backend when component loads
  const fetchReservations = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/reservations/pending`);
      setReservations(response.data); // save response to state
    } catch (error) {
      console.error('Error fetching reservations', error);
    } finally {
      setLoading(false);
    }
  };

  // 🔁 Load data on mount
  useEffect(() => {
    fetchReservations();
  }, []);

  // ✅ Accept reservation by ID
  const handleAccept = async (id) => {
    try {
      await axios.post(`${API_BASE_URL}/api/reservations/${id}/accept`);
      fetchReservations(); // refresh the list
    } catch (error) {
      console.error('Error accepting reservation', error);
    }
  };

  // ❌ Decline reservation by ID
  const handleDecline = async (id) => {
    try {
      await axios.post(`${API_BASE_URL}/api/reservations/${id}/decline`);
      fetchReservations(); // refresh
    } catch (error) {
      console.error('Error declining reservation', error);
    }
  };

  if (loading) return <p>Loading reservations...</p>;

  return (
    <div>
      {reservations.length === 0 ? (
        <p>No pending reservations.</p>
      ) : (
        reservations.map((res) => (
          <div key={res.id} className="reservation">
            <p>
              <strong>{res.name}</strong> | {res.numberOfGuests} guests | {res.time}
            </p>
            <button onClick={() => handleAccept(res.id)}>Accept</button>
            <button onClick={() => handleDecline(res.id)}>Decline</button>
          </div>
        ))
      )}
    </div>
  );
};

// === 🍽️ Component: Menu Management ===
// This handles listing, adding, and deleting menu items
const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', description: '', price: '' });

  const fetchMenu = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/menu`);
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching menu items', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  // ➕ Handle add new item
  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/menu`, newItem);
      setNewItem({ name: '', description: '', price: '' });
      fetchMenu(); // refresh menu
    } catch (error) {
      console.error('Error adding menu item', error);
    }
  };

  // ❌ Delete item
  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/api/menu/${id}`);
      fetchMenu();
    } catch (error) {
      console.error('Error deleting menu item', error);
    }
  };

  if (loading) return <p>Loading menu...</p>;

  return (
    <div>
      <h2>Menu Items</h2>
      {menuItems.length === 0 ? (
        <p>No menu items available.</p>
      ) : (
        menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <p>{item.name} - ${item.price}</p>
            <p>{item.description}</p>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </div>
        ))
      )}
      <h3>Add New Menu Item</h3>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={newItem.description}
          onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          required
          step="0.01"
        />
        <button type="submit" className="add-item-button">Add Item</button>
      </form>
    </div>
  );
};

// === ⏰ Component: Hours Management ===
// This handles showing and updating restaurant open hours
const HoursManagement = () => {
  const [hours, setHours] = useState({ open: '', close: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchHours = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/hours`);
      setHours(response.data);
    } catch (error) {
      console.error('Error fetching hours', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHours();
  }, []);

  const handleUpdateHours = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API_BASE_URL}/api/hours`, hours);
      setMessage('Hours updated successfully!');
    } catch (error) {
      console.error('Error updating hours', error);
      setMessage('Failed to update hours.');
    }
  };

  if (loading) return <p>Loading hours...</p>;

  return (
    <div>
      <h2>Restaurant Open Hours</h2>
      <form onSubmit={handleUpdateHours}>
        <label>
          Open:
          <input
            type="time"
            value={hours.open}
            onChange={(e) => setHours({ ...hours, open: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Close:
          <input
            type="time"
            value={hours.close}
            onChange={(e) => setHours({ ...hours, close: e.target.value })}
            required
          />
        </label>
        <br />
        <button type="submit" className="add-item-button">Update Hours</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

// === 🧑‍🍳 Main Component: WorkerDashboard ===
// Includes all tabs for worker control: Reservations, Menu, and Hours
const WorkerDashboard = () => {
  const [activeTab, setActiveTab] = useState('reservations');

  return (
    <div className="worker-dashboard">
      <h1>Worker Dashboard</h1>
      {/* Tab selection */}
      <div className="tabs">
        <button
          onClick={() => setActiveTab('reservations')}
          className={activeTab === 'reservations' ? 'active' : ''}
        >
          Reservations
        </button>
        <button
          onClick={() => setActiveTab('menu')}
          className={activeTab === 'menu' ? 'active' : ''}
        >
          Menu
        </button>
        <button
          onClick={() => setActiveTab('hours')}
          className={activeTab === 'hours' ? 'active' : ''}
        >
          Open Hours
        </button>
      </div>

      {/* Display selected tab content */}
      <div className="tab-content">
        {activeTab === 'reservations' && <ReservationsManagement />}
        {activeTab === 'menu' && <MenuManagement />}
        {activeTab === 'hours' && <HoursManagement />}
      </div>
    </div>
  );
};

export default WorkerDashboard;
