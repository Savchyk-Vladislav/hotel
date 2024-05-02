const MeetingRoomBooking = require('../models/meeting_room_booking.js');

const getAllMeetingRoomBookings = (req, res) => {
    MeetingRoomBooking.find().then((bookings) => {
        res.status(200).json(bookings);
    }).catch((err) => {
        res.status(500).json({error: err.message});
    })
};

// Експортуємо контролери
module.exports = {getAllMeetingRoomBookings};