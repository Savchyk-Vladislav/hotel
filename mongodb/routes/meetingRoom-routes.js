const express = require('express');
const {
    getAllMeetingRooms
} = require('../controllers/meetingRoom-controller.js');

const router = express.Router();

// Перегляд всіх кімнат
router.get('/meetingrooms', getAllMeetingRooms);

module.exports = router;