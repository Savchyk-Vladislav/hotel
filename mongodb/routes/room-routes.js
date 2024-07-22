const express = require('express');
const {
    getAllRooms
} = require('../controllers/room-controller.js');

const router = express.Router();

router.get('/rooms', getAllRooms);

module.exports = router;

