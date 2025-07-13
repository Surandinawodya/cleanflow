// src/pages/AboutPage.jsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Header from '../components/Header'; // Assuming you want the header on this page
import '../styles/AboutPage.css'; // We'll create this for basic styling

// The Markdown content for the About page
const aboutMarkdown = `# About CleanFlow

Welcome to **CleanFlow**, your premier online platform designed to simplify and streamline the process of booking professional cleaning services. We connect you with trusted and efficient cleaning professionals, ensuring your spaces are sparkling clean with just a few clicks.

---

## Our Mission

Our mission at CleanFlow is to provide a seamless, reliable, and user-friendly experience for both customers seeking cleaning services and professionals offering them. We aim to make booking and managing cleaning appointments effortless, saving you time and ensuring peace of mind.

---

## What We Offer

CleanFlow is built to be your go-to solution for all your cleaning needs, offering:

* **Easy Booking:** A straightforward interface to schedule a variety of cleaning services at your convenience.

* **Diverse Services:** From deep cleaning and carpet care to window washing and specialized cleaning, find the perfect service for your home or office.

* **Flexible Scheduling:** Choose dates and times that fit your busy life.

* **Secure Management:** A personalized dashboard to view, edit, and cancel your bookings with ease.

* **Professional Connections:** Access to a network of vetted and highly-rated cleaning experts.

---

## Why Choose CleanFlow?

* **Convenience:** Book professional cleaning services anytime, anywhere, from any device.

* **Reliability:** We prioritize connecting you with dependable and experienced cleaners.

* **Transparency:** Clear pricing and service descriptions ensure you know exactly what to expect.

* **Efficiency:** Our system is designed to minimize hassle and maximize your time.

* **Customer Satisfaction:** Your clean space and positive experience are our top priorities.

---

## Our Vision

We envision a world where maintaining a clean and healthy environment is simple and stress-free for everyone. CleanFlow is continuously evolving to incorporate new features, expand service offerings, and enhance the overall user experience, striving to be the leading platform for cleaning service management.

---

## Get Started Today!

Join the CleanFlow community and experience the ease of professional cleaning services. Book your first service now and let us handle the dirt, so you can focus on what matters most.
`;

const AboutPage = () => {
  return (
    <div>
      <Header /> {/* Include your Header component */}
      <div className="about-page-container">
        <ReactMarkdown>{aboutMarkdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default AboutPage;