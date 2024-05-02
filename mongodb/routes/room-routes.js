const express = require('express');
const {
    getAllRooms
} = require('../controllers/room-controller.js');

const router = express.Router();

// Перегляд всіх кімнат
router.get('/rooms', getAllRooms);

module.exports = router;