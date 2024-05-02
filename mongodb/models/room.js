const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    room_id: {
        type: Number,
        required: false,
    },
    room_number: {
        type: String,
        required: true,
    },
    room_type: {
        type: String,
        required: true,
    },
    bed_type: {
        type: String,
        required: true,
    },
    price_per_night: {
        type: Number,
        required: true,
    },
    availability: {
        type: String,
        required: true,
    }
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;