const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomBookingSchema = new Schema({
    booking_id: {
        type: Number,
        required: false,
    },
    room_id: {
        type: Number,
        required: true,
    },
    guest_id: {
        type: Number,
        required: true,
    },
    check_in_date: {
        type: String,
        required: true,
    }, 
    check_out_date: {
        type: String,
        required: true,
    },
    total_price: {
        type: Number,
        required: true,
    },
    payment_completed: {
        type: Boolean,
        required: true,
    }
});

const RoomBooking = mongoose.model('Room_Booking', roomBookingSchema);

module.exports = RoomBooking;