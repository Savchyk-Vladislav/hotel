const RoomBooking = require('../models/room_booking.js');

const getAllRoomBookings = (req, res) => {
    RoomBooking.find().then((bookings) => {
        res.status(200).json(bookings);
    }).catch((err) => {
        res.status(500).json({error: err.message});
    })
};

// Експортуємо контролери
module.exports = {getAllRoomBookings};