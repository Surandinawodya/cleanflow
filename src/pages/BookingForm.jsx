import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BookingForm.css';
import Header from '../components/Header';

const BookingForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    customer_name: '',
    address: '',
    date_time: '',
    service_id: '',
  });

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.customer_name.trim()) newErrors.customer_name = 'Customer name is required';
    if (!form.address.trim()) newErrors.address = 'Address is required';
    if (!form.date_time) newErrors.date_time = 'Date & time are required';
    if (!form.service_id) newErrors.service_id = 'Service type is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    if (!validate()) return;
    setSubmitting(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setSubmitError('You must be logged in to submit a booking.');
        setSubmitting(false);
        return;
      }
      const res = await fetch('http://localhost:5000/api/bookings/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setForm({ customer_name: '', address: '', date_time: '', service_id: '' });
        navigate('/dashboard');
      } else {
        setSubmitError(data.message || 'Booking submission failed');
      }
    } catch (err) {
      setSubmitError('Network error submitting booking');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="booking-container">
        <h2 className="booking-title">Book a Cleaning Service</h2>
        <form onSubmit={handleSubmit} className="booking-form" noValidate>
          <div className="form-group">
            <label htmlFor="customer_name">Customer Name</label>
            <input id="customer_name" type="text" value={form.customer_name} onChange={e => setForm({ ...form, customer_name: e.target.value })} className="input-field" />
            {errors.customer_name && <p className="error-text">{errors.customer_name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input id="address" type="text" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} className="input-field" />
            {errors.address && <p className="error-text">{errors.address}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="date_time">Date & Time</label>
            <input id="date_time" type="datetime-local" value={form.date_time} onChange={e => setForm({ ...form, date_time: e.target.value })} className="input-field" />
            {errors.date_time && <p className="error-text">{errors.date_time}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="service_id">Service Type</label>
            <select id="service_id" value={form.service_id} onChange={e => setForm({ ...form, service_id: e.target.value })} className="input-field">
              <option value="">-- Select Service --</option>
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
            {errors.service_id && <p className="error-text">{errors.service_id}</p>}
          </div>
          {submitError && <p className="error-text submit-error">{submitError}</p>}
          <button type="submit" className="submit-btn" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;