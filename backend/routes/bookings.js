const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');

// GET all bookings for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching bookings' });
  }
});

// POST a new booking
router.post('/add', auth, async (req, res) => {
  const { customer_name, address, date_time, service_id } = req.body;
  if (!customer_name || !address || !date_time || !service_id) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const newBooking = new Booking({
      user: req.user.id,
      customer_name,
      address,
      date_time,
      service_id,
    });
    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: 'Server error while creating booking' });
  }
});

// PUT to update an existing booking
router.put('/:id', auth, async (req, res) => {
  const { customer_name, address, date_time, service_id } = req.body;

  if (!customer_name || !address || !date_time || !service_id) {
    return res.status(400).json({ message: 'All fields are required for update' });
  }

  try {
    const booking = await Booking.findOne({ _id: req.params.id, user: req.user.id });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found or unauthorized' });
    }

    booking.customer_name = customer_name;
    booking.address = address;
    booking.date_time = date_time;
    booking.service_id = service_id;

    await booking.save();

    res.status(200).json({ message: 'Booking updated', booking });
  } catch (err) {
    res.status(500).json({ message: 'Server error while updating booking' });
  }
});

// DELETE an existing booking
router.delete('/:id', auth, async (req, res) => {
  try {
    const booking = await Booking.findOneAndDelete({ _id: req.params.id, user: req.user.id });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found or unauthorized' });
    }

    res.status(200).json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error while deleting booking' });
  }
});

module.exports = router;
