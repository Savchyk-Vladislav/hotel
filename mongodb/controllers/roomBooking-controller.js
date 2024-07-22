const RoomBooking = require('../models/room_booking.js');

const getAllRoomBookings = (req, res) => {
    RoomBooking.find().then((bookings) => {
        res.status(200).json(bookings);
    }).catch((err) => {
        res.status(500).json({error: err.message});
    })
};

const addRoomBooking = (req, res) => {
    const newBooking = new RoomBooking(req.body);

    newBooking.save().then((booking) => {
        res.status(201).json(booking);
    }).catch((err) => {
        res.status(500).json({error: err.message});
    });
};

// Експортуємо контролери
module.exports = {getAllRoomBookings, addRoomBooking};