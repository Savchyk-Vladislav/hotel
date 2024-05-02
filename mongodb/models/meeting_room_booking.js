const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const meetingRoomBookingSchema = new Schema({
    
    booking_id: {
        type: Number,
        required: false,
    },
    meeting_room_id: {
        type: Number,
        required: true,
    },
    guest_id: {
        type: Number,
        required: true,
    },
    total_price: {
        type: Number,
        required: true,
    },
    payment_completed: {
        type: Boolean,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

const MeetingRoomBooking = mongoose.model('Meeting_Room_Booking', meetingRoomBookingSchema);

module.exports = MeetingRoomBooking;