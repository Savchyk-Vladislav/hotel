const express = require('express');
const {
    getAllMeetingRoomBookings
} = require('../controllers/meetingRoomBooking-controller.js');

const router = express.Router();

// Перегляд всіх кімнат
router.get('/meetingroombookings', getAllMeetingRoomBookings);

module.exports = router;