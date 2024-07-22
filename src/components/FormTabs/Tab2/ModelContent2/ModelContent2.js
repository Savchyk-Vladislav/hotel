import React, { useState, useEffect } from 'react';
import './ModelContent2.css';
import BookMeetingRoom from '../BookMeetingRoom/BookMeetingRoom';

export default function ModelContent2({ date, capacity, onBookNow }) {
    const [roomsData, setRoomsData] = useState([]);
    const [selectedRoomCapacity, setSelectedRoomCapacity] = useState(null);

    useEffect(() => {
        fetchRoomsData();
    }, [date, capacity]);

    const fetchRoomsData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/get-available-meeting-rooms?date=${date}&capacity=${capacity}`);
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

    const getUniqueRoomCapacities = () => {
        const uniqueRoomCapacities = [...new Set(roomsData.map(room => room.capacity))];
        return uniqueRoomCapacities.sort((a, b) => a - b); // Сортування за зростанням
    };

    const getPriceForRoomCapacity = (capacity) => {
        const roomsOfCapacity = roomsData.filter(room => room.capacity === capacity);
        return roomsOfCapacity.length > 0 ? roomsOfCapacity[0].price : 'N/A';
    };

    const getAvailableRoomsCountForCapacity = (capacity) => {
        const roomsOfCapacity = roomsData.filter(room => room.capacity === capacity);
        const roomsCount = roomsOfCapacity.length;
        return roomsCount;
    };

    return (
        <div className="modal-content2">
            {selectedRoomCapacity ? (
                <BookMeetingRoom roomCapacity={selectedRoomCapacity} date={date} onBack={() => setSelectedRoomCapacity(null)} />
            ) : (
                getUniqueRoomCapacities().map(capacity => (
                    <div className="room-group" key={capacity}>
                        <h2>Capacity: {capacity}</h2>
                        <p>Price: {getPriceForRoomCapacity(capacity)}$</p>
                        <p>Available: {getAvailableRoomsCountForCapacity(capacity)}</p>
                        <button className="modal-content-btn" onClick={() => setSelectedRoomCapacity(capacity)}>Book Now</button>
                    </div>
                ))
            )}
        </div>
    );
}