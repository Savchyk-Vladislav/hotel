const Guest = require('../models/guest.js');

const getAllGuests = (req, res) => {
    Guest.find().then((guests) => {
        res.status(200).json(guests);
    }).catch((err) => {
        res.status(500).json({error: err.message});
    })
};

// Експортуємо контролери
module.exports = {getAllGuests};