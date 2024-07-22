import React, { useState, useEffect } from 'react';
import './BookRoom.css';

export default function BookRoom({ roomType, startDate: initialStartDate, endDate: initialEndDate }) {
    // Стани змінних
    const [selectedRoomType, setSelectedRoomType] = useState(roomType);
    const [selectedRoomNumber, setSelectedRoomNumber] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [roomNumbers, setRoomNumbers] = useState([]);
    const [pricePerNight, setPricePerNight] = useState(0);
    const [startDate, setStartDate] = useState(initialStartDate); 
    const [endDate, setEndDate] = useState(initialEndDate);
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [passportNumber, setPassportNumber] = useState('');
    const [message, setMessage] = useState('');

    // Обробник кнопки бронювання
    const handleBooking = async (event) => {
        event.preventDefault();
        
        // Створюємо об'єкт гостя
        const guestData = {
            full_name: fullName,
            age: age,
            phone_number: phoneNumber,
            email: email,
            passport_number: passportNumber
        };
    
        try {
            // Намагаємося додати гостя до бази даних якщо його немає
            const guestResponse = await fetch('http://localhost:5000/guests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(guestData),
            });
    
            if (!guestResponse.ok) {
                throw new Error(`HTTP error! status: ${guestResponse.status}`);
            }
            
            // Отримуємо guest_id 
            const guest = await guestResponse.json();
            
            // Створюємо об'єкт бронювання 
            const bookingData = {
                room_id: selectedRoomNumber,
                guest_id: guest.guest_id,
                check_in_date: startDate,
                check_out_date: endDate,
                total_price: totalPrice,
                payment_completed: false
            };
            
            // Намагаємося додати гостя до бази даних якщо його немає
            const bookingResponse = await fetch('http://localhost:5000/roombookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });
    
            if (!bookingResponse.ok) {
                throw new Error(`HTTP error! status: ${bookingResponse.status}`);
            }
    
            setMessage('Your reservation has been successfully accepted');
        } catch (error) {
            console.error('An error occurred while making the booking:', error);
            setMessage('Something went wrong, try again later');
        }
    };

    useEffect(() => {
        fetchRoomsData();
    }, [selectedRoomType]);   

    const fetchRoomsData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/get-available-rooms?startDate=${startDate}&endDate=${endDate}`);
            if (!response.ok) {
                console.error('Ошибка сети:', response.status, response.statusText);
                return;
            }
            const data = await response.json();
            if (!Array.isArray(data) || data.length === 0) {
                console.error('Нет данных о комнатах:', data);
                return;
            }
            const roomsOfType = data.filter(room => room.room_type === selectedRoomType.toLowerCase());
            setRoomNumbers(roomsOfType.map(room => room.room_number));
            setPricePerNight(roomsOfType[0].price_per_night);
            setSelectedRoomNumber(roomsOfType[0].room_number || '');
        } catch (error) {
            console.error('Ошибка при получении данных о комнатах:', error);
        }
    };

    useEffect(() => {
        if (startDate && endDate) {
            const days = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
            setTotalPrice(days * pricePerNight);
        } else {
            setTotalPrice('Select date range');
        }
    }, [startDate, endDate, pricePerNight]);

    return (
        <div className="book-room">
            <div className='book-room-container'>
                <form>
                    <div className="book-room-container-column">
                        <h2>Info about you</h2>
                        <br></br>
                        <label>Full name:</label>
                        <input type='text' id='fullnameGuest' className="input" placeholder='Your full name' value={fullName} onChange={e => setFullName(e.target.value)}></input>
                        <br></br>
                        <label>Age:</label>
                        <input type='text' id='ageGuest' className="input" placeholder='Your age' value={age} onChange={e => setAge(e.target.value)}></input>
                        <br></br>
                        <label>Phone number:</label>
                        <input type='text' id='phonenumberGuest' className="input" placeholder='Your phone number' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}></input>
                        <br></br>
                        <label>Email:</label>
                        <input type='email' id='emailGuest' className="input" placeholder='Your email' value={email} onChange={e => setEmail(e.target.value)}></input>
                        <br></br>
                        <label>Passport number:</label>
                        <input type='text' id='passportnumberGuest' className="input" placeholder='Your passport number' value={passportNumber} onChange={e => setPassportNumber(e.target.value)}></input>
                        <br></br>
                    </div>
                    <div className="book-room-container-column">
                        <h2>Info about book</h2>
                        <br></br>
                        <label>Room type:</label>
                        <select id='roomType' className="input" value={selectedRoomType} onChange={e => setSelectedRoomType(e.target.value)}>
                            <option value="Standard">Standard</option>
                            <option value="Premium">Premium</option>
                            <option value="Family">Family</option>
                            <option value="Accessible">Accessible</option>
                        </select>
                        <br></br>
                        <label>Room number:</label>
                        <select id='roomNumber' className="input" value={selectedRoomNumber} onChange={e => setSelectedRoomNumber(e.target.value)}>
                            {roomNumbers.map(number => <option key={number} value={number}>{number}</option>)}
                        </select>
                        <br></br>
                        <label>Data start:</label>
                        <input type='date' id='startDate' className="input" value={startDate} onChange={e => setStartDate(e.target.value)}></input>
                        <br></br>
                        <label>Data end:</label>
                        <input type='date' id='endDate' className="input" value={endDate} onChange={e => setEndDate(e.target.value)}></input>
                        <br></br>
                        <label>Total price:</label>
                        <input type='text' id='totalPrice' className="input" value={totalPrice + "$"} readOnly></input>
                        <br></br>
                    </div>
                    <div className="book-room-container-column">
                        <button className='modal-content-btn bookroom' onClick={handleBooking}>Book</button>
                        {message && <p>{message}</p>}
                    </div>
                </form>
                <h2 className="alert">Upon entering the hotel, your passport will be checked. Reservations are not possible for persons under 18 years of age!!!</h2>
            </div>
        </div>
    );
}