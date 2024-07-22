import React, { useState, useEffect } from 'react';
import './ModalContent1.css';
import standartRoom from '../../../img/visnavitem1.jpeg';
import premiumRoom from '../../../img/visnavitem2.jpeg';
import familyRoom from '../../../img/visnavitem3.jpeg';
import accessibleRoom from '../../../img/visnavitem4.jpeg';
import BookRoom from '../BookRoom/BookRoom';

export default function ModalContent1({ startDate, endDate, onBookNow}) {
    const [roomsData, setRoomsData] = useState([]);
    const [selectedRoomType, setSelectedRoomType] = useState(null);

    useEffect(() => {
        fetchRoomsData();
    }, [startDate, endDate]);

    const fetchRoomsData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/get-available-rooms?startDate=${startDate}&endDate=${endDate}`);
            if (!response.ok) {
                console.error('Помилка:', response.status, response.statusText);
                return;
            }
            const data = await response.json();
            if (!Array.isArray(data) || data.length === 0) {
                console.error('Нема даних о кімнатах:', data);
                return;
            }
            setRoomsData(data);
        } catch (error) {
            console.error('Помилка при отриманні даних о кімнатах:', error);
        }
    };
    

    const getUniqueRoomTypes = () => {
        const uniqueRoomTypes = [...new Set(roomsData.map(room => room.room_type.charAt(0).toUpperCase() + room.room_type.slice(1)))];
        return uniqueRoomTypes;
    };

    const getPriceForRoomType = (roomType) => {
        const originalRoomType = roomType.charAt(0).toLowerCase() + roomType.slice(1);
        const roomsOfType = roomsData.filter(room => room.room_type === originalRoomType);
        return roomsOfType.length > 0 ? roomsOfType[0].price_per_night : 'N/A';
    };
    
    const getAvailableRoomsCountForRoomType  = (roomType) => {
        const originalRoomType = roomType.charAt(0).toLowerCase() + roomType.slice(1);
        const roomsOfType = roomsData.filter(room => room.room_type === originalRoomType);
        const roomsCount = roomsOfType.length;
        return roomsCount;
    };    

    function getImageForRoomType(roomType) {
        switch (roomType) {
            case 'Standard':
                return standartRoom;
            case 'Premium':
                return premiumRoom;
            case 'Family':
                return familyRoom;
            case 'Accessible':
                return accessibleRoom;
            default:
                return '';
        }
    }

    return (
        <div className="modal-content">
            {selectedRoomType ? (
                <BookRoom roomType={selectedRoomType} startDate={startDate} endDate={endDate} onBack={() => setSelectedRoomType(null)} />
            ) : (
                getUniqueRoomTypes().map(roomType => (
                    <div className="modal-content-item" key={roomType}>
                        <img src={getImageForRoomType(roomType)}/>
                        <p>{roomType} Room</p>
                        <p>Price: {getPriceForRoomType(roomType)}$</p>
                        <p>Available: {getAvailableRoomsCountForRoomType(roomType)}</p>
                        <button className='modal-content-btn' onClick={() => setSelectedRoomType(roomType)}>Book Now</button>
                    </div>
                ))
            )}
        </div>
    );
}