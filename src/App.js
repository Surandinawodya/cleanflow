import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingForm from './pages/BookingForm';
import Dashboard from './pages/Dashboard';
import MyProfilePage from './components/MyProfilePage';
import ContactUs from './components/ContactUs';
import AboutPage from './components/AboutPage';
import ProtectedRoute from './components/ProtectedRoute';


import './App.css'; // Global styles

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">

        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Protected Routes */}
            <Route
              path="/book"
              element={
                <ProtectedRoute>
                  <BookingForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/MyProfilePage"
              element={
                <ProtectedRoute>
                  <MyProfilePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

 
      </div>
    </Router>
  );
}

export default App;
