const Room = require('../models/room.js');

const getAllRooms = (req, res) => {
    Room.find().then((rooms) => {
        res.status(200).json(rooms);
    }).catch((err) => {
        res.status(500).json({error: err.message});
    })
};

// Експортуємо контролери
module.exports = {getAllRooms};