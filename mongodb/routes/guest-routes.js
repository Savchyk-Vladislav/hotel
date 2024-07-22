const express = require('express');
const {
    getAllGuests,
    addGuest
} = require('../controllers/guest-controller.js');

const router = express.Router();

router.get('/guests', getAllGuests);
router.post('/guests', addGuest);

module.exports = router;