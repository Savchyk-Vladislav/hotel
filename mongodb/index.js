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
const Room = require('./models/room.js');
const RoomBooking = require('./models/room_booking.js');
const MeetingRoom = require('./models/meeting_room.js');
const MeetingRoomBooking = require('./models//meeting_room_booking.js');

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

// Перевірка на available номерів
async function updateRoomAvailability() {
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');
    let formattedDate = `${year}-${month}-${day}`;

    const bookings = await RoomBooking.find({
        check_in_date: { $lte: formattedDate },
        check_out_date: { $gt: formattedDate }
    });

    const meetingRoomBookings = await MeetingRoomBooking.find({
        date: { $eq: formattedDate },
    });
    
    await Room.updateMany({}, { availability: 'available' });
    await MeetingRoom.updateMany({}, { availability: 'available' });
  
    for (let booking of bookings) {
        await Room.updateOne({ room_id: booking.room_id }, { availability: 'unavailable' });
    }

    for (let booking of meetingRoomBookings) {
        await MeetingRoom.updateOne({ meeting_room_id: booking.meeting_room_id }, { availability: 'unavailable' });
    }
  
    console.log('Room availability updated');
}

setInterval(updateRoomAvailability, 60 * 1000);