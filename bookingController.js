const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.status(201).json(booking);
};
