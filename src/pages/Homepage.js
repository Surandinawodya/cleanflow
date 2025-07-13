import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import backgroundImage from '../assets/img.jpg';
import '../styles/HomePage.css';

const Homepage = () => {
  return (
    <div>
      <Header />
      <div 
        className="homepage-container" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="fade-in">
          <h1 className="homepage-title">Welcome to CleanFlow</h1>
          <p className="homepage-subtext">
            Book trusted and professional cleaners for your home or office. Hassle-free and reliable service at your fingertips.
          </p>
          <div className="homepage-buttons">
            <Link to="/book" className="book-btn">Book Now</Link>
            <Link to="/dashboard" className="dashboard-btn">My Bookings</Link>
          </div>
        </div>
      </div>

      {/* Boxes Section */}
      <section className="info-boxes-section">
        <div className="info-box fade-in-up">
          <h2>Why Choose Us?</h2>
          <p>We offer flexible scheduling and eco-friendly cleaning solutions tailored to your needs.</p>
        </div>
        <div className="info-box fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2>Trusted Professionals</h2>
          <p>Our cleaners are background-checked and trained to deliver top-quality service every time.</p>
        </div>
        <div className="info-box fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2>24/7 Customer Support</h2>
          <p>We’re here whenever you need us before, during, and after your booking.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
