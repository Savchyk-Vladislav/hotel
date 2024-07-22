const MeetingRoomBooking = require('../models/meeting_room_booking.js');

const getAllMeetingRoomBookings = (req, res) => {
    MeetingRoomBooking.find().then((bookings) => {
        res.status(200).json(bookings);
    }).catch((err) => {
        res.status(500).json({error: err.message});
    })
};

const addMeetingRoomBooking = (req, res) => {
    const newBooking = new MeetingRoomBooking(req.body);

    newBooking.save().then((booking) => {
        res.status(201).json(booking);
    }).catch((err) => {
        res.status(500).json({error: err.message});
    });
};

// Експортуємо контролери
module.exports = {getAllMeetingRoomBookings, addMeetingRoomBooking};