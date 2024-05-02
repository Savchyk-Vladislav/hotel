const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    contact_id: {
        type: Number,
        required: false,
    },
    client_name: {
        type: String,
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
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    how_contacted: {
        type: String,
        required: true
    },
    when_contacted: {
        type: String,
        required: true
    },
    processed: {
        type: Boolean,
        required: true
    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;