const express = require('express');
const {
    getAllGuests
} = require('../controllers/guest-controller.js');

const router = express.Router();

// Перегляд всіх кімнат
router.get('/guests', getAllGuests);

module.exports = router;