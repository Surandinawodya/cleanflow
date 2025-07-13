import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userId', res.data.user._id);
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      alert('Login failed! Please check your credentials.');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-form">
        <h2 className="form-title">Welcome Back to CleanFlow</h2>

        {/* Email with Icon */}
        <div className="input-icon-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        {/* Password with Icon and Toggle */}
        <div className="input-icon-group password-field">
          <FaLock className="input-icon" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <span onClick={() => setShowPassword(!showPassword)} className="eye-icon">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit" className="btn-primary">Login</button>

        <div className="auth-links">
          <Link to="/register">Create New Account</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
