const MeetingRoom = require('../models/meeting_room.js');

const getAllMeetingRooms = (req, res) => {
    MeetingRoom.find().then((rooms) => {
        res.status(200).json(rooms);
    }).catch((err) => {
        res.status(500).json({error: err.message});
    })
};

// Експортуємо контролери
module.exports = {getAllMeetingRooms};