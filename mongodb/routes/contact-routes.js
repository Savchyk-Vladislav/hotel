const express = require('express');
const {
    getAllContact,
    addContact
} = require('../controllers/contact-controller.js');

const router = express.Router();

router.get('/contacts', getAllContact);
router.post('/contacts', addContact);

module.exports = router;