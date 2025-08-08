const express = require('express');
const router = express.Router();
const { testUserRoute } = require('../controllers/userController');

router.get('/', testUserRoute);

module.exports = router;

