const express = require('express');
const {
    getAllMeetingRoomBookings,
    addMeetingRoomBooking
} = require('../controllers/meetingRoomBooking-controller.js');

const router = express.Router();

router.get('/meetingroombookings', getAllMeetingRoomBookings);
router.post('/meetingroombookings', addMeetingRoomBooking);

module.exports = router;