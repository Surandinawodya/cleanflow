const express = require('express');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');
const bookings = require('./routes/bookings');
const contactRoutes = require('./routes/contactRoutes'); // Booking routes
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
app.use('/api/auth', authRoutes);        // User registration/login/profile
app.use('/api/bookings', bookings); // Booking create/list routes
app.use('/api/contact', contactRoutes);
// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
