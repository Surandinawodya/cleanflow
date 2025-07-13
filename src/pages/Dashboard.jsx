import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';
import Header from '../components/Header';

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    customer_name: '',
    address: '',
    date_time: '',
    service_id: '',
  });

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/bookings', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Failed to fetch bookings');
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error('Error fetching bookings:', err);
    }
  };

  const handleCancelBooking = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5000/api/bookings/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.ok) {
        setBookings(bookings.filter((booking) => booking._id !== id));
      } else {
        console.error('Cancel failed');
      }
    } catch (err) {
      console.error('Cancel error:', err);
    }
  };

  const handleEditClick = (booking) => {
    setEditId(booking._id);
    setEditForm({
      customer_name: booking.customer_name,
      address: booking.address,
      date_time: new Date(booking.date_time).toISOString().slice(0, 16),
      service_id: booking.service_id,
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`http://localhost:5000/api/bookings/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(editForm)
      });

      if (res.ok) {
        const updated = await res.json();
        setBookings(bookings.map((b) => b._id === editId ? updated.booking : b));
        setEditId(null);
      } else {
        const err = await res.json();
        console.error('Update failed:', err.message);
      }
    } catch (err) {
      console.error('Update error:', err);
    }
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditForm({
      customer_name: '',
      address: '',
      date_time: '',
      service_id: '',
    });
  };

  const getServiceName = (id) => {
    switch (id) {
        case '1': return 'Deep Cleaning';
    case '2': return 'Carpet Cleaning';
    case '3': return 'Window Cleaning';
    case '4': return 'Sofa Cleaning';
    case '5': return 'Kitchen Cleaning';
    case '6': return 'Bathroom Sanitization';
    case '7': return 'Office Cleaning';
    case '8': return 'Post-Construction Cleaning';
    case '9': return 'Move-in/Move-out Cleaning';
    case '10': return 'Floor Polishing';
    default: return 'Unknown';
    }
  };

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <h2 className="dashboard-title">My Bookings</h2>
        <ul className="booking-list">
          {bookings.map((booking) => (
            <li key={booking._id} className="booking-item">
              {editId === booking._id ? (
                <>
                  <input
                    type="text"
                    name="customer_name"
                    value={editForm.customer_name}
                    onChange={handleEditChange}
                    className="input-field"
                    placeholder="Customer Name"
                  />
                  <input
                    type="text"
                    name="address"
                    value={editForm.address}
                    onChange={handleEditChange}
                    className="input-field"
                    placeholder="Address"
                  />
                  <input
                    type="datetime-local"
                    name="date_time"
                    value={editForm.date_time}
                    onChange={handleEditChange}
                    className="input-field"
                  />
                  <select
                    name="service_id"
                    value={editForm.service_id}
                    onChange={handleEditChange}
                    className="input-field"
                  >
                    <option value="1">Deep Cleaning</option>
<option value="2">Carpet Cleaning</option>
<option value="3">Window Cleaning</option>
<option value="4">Sofa Cleaning</option>
<option value="5">Kitchen Cleaning</option>
<option value="6">Bathroom Sanitization</option>
<option value="7">Office Cleaning</option>
<option value="8">Post-Construction Cleaning</option>
<option value="9">Move-in/Move-out Cleaning</option>
<option value="10">Floor Polishing</option>

                  </select>
                  <div className="button-group">
                    <button
                      onClick={handleUpdate}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p><strong>Name:</strong> {booking.customer_name}</p>
                  <p><strong>Address:</strong> {booking.address}</p>
                  <p><strong>Service:</strong> {getServiceName(booking.service_id)}</p>
                  <p><strong>Date:</strong> {new Date(booking.date_time).toLocaleString()}</p>
                  <div className="mt-2 flex gap-4">
                    <button
                      onClick={() => handleEditClick(booking)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleCancelBooking(booking._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
