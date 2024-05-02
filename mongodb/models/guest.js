const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const guestSchema = new Schema({
    
    guest_id: {
        type: Number,
        required: false,
    },
    full_name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    passport_number: {
        type: String,
        required: true,
    }
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;