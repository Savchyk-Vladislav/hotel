const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const meetingRoomSchema = new Schema({
    meeting_room_id: {
        type: Number,
        required: false,
    },
    room_number: {
        type: String,
        required: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    availability: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

const MeetingRoom = mongoose.model('Meeting_Room', meetingRoomSchema);

module.exports = MeetingRoom;