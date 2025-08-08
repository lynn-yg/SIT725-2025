const express = require('express');
const router = express.Router();

// Test route for stations
router.get('/', (req, res) => {
  res.send('📍 Station route is working!');
});

module.exports = router;