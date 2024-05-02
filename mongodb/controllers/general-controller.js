const Guest = require('../models/guest.js');
const MeetingRoom = require('../models/meeting_room.js');
const MeetingRoomBooking = require('../models/meeting_room_booking.js');
const Room = require('../models/room.js');
const RoomBooking = require('../models/room_booking.js');
const Contact = require('../models/contact.js');

const getAvailableRooms = (req, res) => {
    const { startDate, endDate } = req.query;

    RoomBooking.find({
        $and: [
            { check_in_date: { $lt: endDate } },
            { check_out_date: { $gt: startDate } }
        ]
    }).then((bookings) => {
        const bookedRoomIds = bookings.map(booking => booking.room_id);
        return Room.find({ room_id: { $nin: bookedRoomIds } });
    }).then((rooms) => {
        res.status(200).json(rooms);
    }).catch((err) => {
        res.status(500).json({ error: err.message });
    });
};

const getAvailableMeetingRooms = (req, res) => {
    const { date, capacity } = req.query;

    MeetingRoomBooking.find({
        date: date
    }).then((bookings) => {
        const bookedMeetingRoomIds = bookings.map(booking => booking.meeting_room_id);
        return MeetingRoom.find({ meeting_room_id: { $nin: bookedMeetingRoomIds }, capacity: { $gte: capacity } });
    }).then((rooms) => {
        res.status(200).json(rooms);
    }).catch((err) => {
        res.status(500).json({ error: err.message });
    });
};

module.exports = {getAvailableRooms, getAvailableMeetingRooms};