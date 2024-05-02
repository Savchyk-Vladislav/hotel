// MongoDB Part
const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors');
const roomRouter = require('./routes/room-routes.js');
const contactRouter = require('./routes/contact-routes.js');
const meetingRoomRouter = require('./routes/meetingRoom-routes.js');
const guestRouter = require('./routes/guest-routes.js');
const meetingRoomBookingRouter = require('./routes/meetingRoomBooking-routes.js');
const roomBookingRouter = require('./routes/roomBooking-routes.js');
const generalRouter = require('./routes/general-routes.js');

const PORT = 5000;
const URL = 'mongodb://localhost:27017/hotel'; 

const server = express(); 
server.use(cors());
server.use(express.json()); 
server.use(roomRouter); 
server.use(contactRouter); 
server.use(meetingRoomRouter);
server.use(guestRouter); 
server.use(meetingRoomBookingRouter); 
server.use(roomBookingRouter); 
server.use(generalRouter); 

mongoose.connect(URL).then(() => console.log('Connected to MongoDB')).catch((err) => console.log(`DB connection error: ${err}`));

server.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Listening port ${PORT}`);
});