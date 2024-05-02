const express = require('express');
const {
    getAvailableRooms,
    getAvailableMeetingRooms
} = require('../controllers/general-controller.js');

const router = express.Router();

router.get('/get-available-rooms', getAvailableRooms); // http://localhost:5000/get-available-rooms?startDate=2024-05-01&endDate=2024-05-05
router.get('/get-available-meeting-rooms', getAvailableMeetingRooms); // http://localhost:5000/get-available-meeting-rooms?date=2024-05-05&capacity=18

module.exports = router;