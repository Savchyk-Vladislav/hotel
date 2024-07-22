const Guest = require('../models/guest.js');

const getAllGuests = (req, res) => {
    Guest.find().then((guests) => {
        res.status(200).json(guests);
    }).catch((err) => {
        res.status(500).json({error: err.message});
    })
};

const addGuest = (req, res) => {
    const newGuest = req.body;

    Guest.findOne({ passport_number: newGuest.passport_number })
        .then((guest) => {
            if (guest) {
                res.status(200).json({ guest_id: guest.guest_id });
            } else {
                Guest.countDocuments()
                    .then((count) => {
                        newGuest.guest_id = count + 1;

                        const guest = new Guest(newGuest);

                        guest.save()
                            .then(() => {
                                res.status(201).json({ guest_id: guest.guest_id });
                            })
                            .catch((err) => {
                                res.status(500).json({ error: err.message });
                            });
                    })
                    .catch((err) => {
                        res.status(500).json({ error: err.message });
                    });
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

// Експортуємо контролери
module.exports = {getAllGuests, addGuest};