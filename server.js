const express = require('express'); // ✅ GOOD
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // for parsing JSON

// Import routes
const userRoutes = require('./routes/userRoutes');
const stationRoutes = require('./routes/stationRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/stations', stationRoutes);


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.error(err));
