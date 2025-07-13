import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaUserCircle, FaSignOutAlt, FaBroom } from 'react-icons/fa'; // added FaBroom
import '../styles/Header.css';

const Header = () => {
  const navigate = useNavigate();

  // Check if user is logged in based on token
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token'); // or sessionStorage if you're using that
    navigate('/login');
  };

  return (
    <header>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white flex items-center space-x-2">
          <FaBroom size={24} /> {/* Icon on the left */}
          <span>CleanFlow</span>
        </h1>

        <nav className="main-nav-group flex items-center space-x-6">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/book" className="nav-link">Book Service</Link>
          <Link to="/dashboard" className="nav-link">My Bookings</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>

        <div className="auth-nav-group flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              <Link to="/MyProfilePage" className="nav-link">
                <FaUserCircle className="mr-1" /> Profile
              </Link>
              <button onClick={handleLogout} className="nav-link logout-btn">
                <FaSignOutAlt className="mr-1" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                <FaSignInAlt className="mr-1" /> Login
              </Link>
              <Link to="/register" className="nav-link">
                <FaUserPlus className="mr-1" /> Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
