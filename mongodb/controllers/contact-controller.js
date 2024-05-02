const Contact = require('../models/contact.js');

const getAllContact = (req, res) => {
    Contact.find().then((contacts) => {
        res.status(200).json(contacts);
    }).catch((err) => {
        res.status(500).json({error: err.message});
    })
};

const addContact = (req, res) => {
    const contact = new Contact(req.body);
    contact.save().then((result) => {
        res.status(201).json(result);
    }).catch((err) => {
        res.status(500).json({error: err.message});
    })
};

// Експортуємо контролери
module.exports = {getAllContact, addContact};