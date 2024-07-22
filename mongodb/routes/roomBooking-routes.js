const express = require('express');
const {
    getAllRoomBookings,
    addRoomBooking
} = require('../controllers/roomBooking-controller.js');

const router = express.Router();

router.get('/roombookings', getAllRoomBookings);
router.post('/roombookings', addRoomBooking);

module.exports = router;