const express = require('express');
const {
    getAllRoomBookings
} = require('../controllers/roomBooking-controller.js');

const router = express.Router();

// Перегляд всіх кімнат
router.get('/roombookings', getAllRoomBookings);

module.exports = router;