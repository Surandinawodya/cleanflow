import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Auth.css';
import {
  FaUser, FaEnvelope, FaLock, FaIdCard, FaMapMarkerAlt, FaPhoneAlt,
  FaEye, FaEyeSlash
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    fullName: '',
    address: '',
    phoneNumber: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const { username, email, password, fullName, address, phoneNumber } = form;
    if (!username || !email || !password || !fullName || !address || !phoneNumber) {
      alert('All fields are required!');
      return false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert('Invalid email format!');
      return false;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters!');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrorMessage('');

    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('Registration successful!');
      navigate('/login');
    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'Registration failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="auth-form">
        <h2>Create Account</h2>
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="input-icon-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={e => setForm({ ...form, username: e.target.value })}
          />
        </div>

        <div className="input-icon-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="password-field input-icon-group">
          <FaLock className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
          <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="input-icon-group">
          <FaIdCard className="input-icon" />
          <input
            type="text"
            placeholder="Full Name"
            value={form.fullName}
            onChange={e => setForm({ ...form, fullName: e.target.value })}
          />
        </div>

        <div className="input-icon-group">
          <FaPhoneAlt className="input-icon" />
          <input
            type="text"
            placeholder="Phone Number"
            value={form.phoneNumber}
            onChange={e => setForm({ ...form, phoneNumber: e.target.value })}
          />
        </div>

        <div className="input-icon-group">
          <FaMapMarkerAlt className="input-icon" />
          <input
            type="text"
            placeholder="Address"
            value={form.address}
            onChange={e => setForm({ ...form, address: e.target.value })}
          />
        </div>

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
