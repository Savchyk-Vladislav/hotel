import React, { useState, useEffect } from 'react';
import './BookMeetingRoom.css';

export default function BookMeetingRoom({ roomCapacity, date: initialDate}) {
    // Стани змінних
    const [selectedRoomCapacity, setSelectedRoomCapacity] = useState(roomCapacity);
    const [selectedRoomNumber, setSelectedRoomNumber] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [roomNumbers, setRoomNumbers] = useState([]);
    const [pricePerNight, setPricePerNight] = useState(0);
    const [date, setDate] = useState(initialDate); 
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
                meeting_room_id: selectedRoomNumber,
                guest_id: guest.guest_id,
                total_price: totalPrice,
                payment_completed: false,
                date: date
            };
            
            // Намагаємося додати бронювання
            const bookingResponse = await fetch('http://localhost:5000/meetingroombookings', {
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
    }, [selectedRoomCapacity]);   

    const fetchRoomsData = async () => {
        try {
            const response = await fetch(`http://localhost:5000/get-available-meeting-rooms?date=${date}&capacity=${selectedRoomCapacity}`);
            if (!response.ok) {
                console.error('Ошибка сети:', response.status, response.statusText);
                return;
            }
            const data = await response.json();
            if (!Array.isArray(data) || data.length === 0) {
                console.error('Нет данных о комнатах:', data);
                return;
            }
            const roomsOfCapacity = data.filter(room => room.capacity === selectedRoomCapacity);
            setRoomNumbers(roomsOfCapacity.map(room => room.room_number));
            setPricePerNight(roomsOfCapacity[0].price);
            setSelectedRoomNumber(roomsOfCapacity[0].room_number || '');
        } catch (error) {
            console.error('Ошибка при получении данных о комнатах:', error);
        }
    };

    useEffect(() => {
        if (date) {
            setTotalPrice(pricePerNight);
        } else {
            setTotalPrice('Select date');
        }
    }, [date, pricePerNight]);

    return (
        <div className="book-room">
            <div className='book-room-container meeting'>
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
                        <label>Capacity:</label>
                        <select id='roomType' className="input" value={selectedRoomCapacity} onChange={e => setSelectedRoomCapacity(Number(e.target.value))}>
                            <option value="10">10</option>
                            <option value="12">12</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="18">18</option>
                            <option value="20">20</option>
                            <option value="22">22</option>
                            <option value="25">25</option>
                            <option value="28">28</option>
                            <option value="30">30</option>
                        </select>
                        <br></br>
                        <label>Room number:</label>
                        <select id='roomNumber' className="input" value={selectedRoomNumber} onChange={e => setSelectedRoomNumber(e.target.value)}>
                            {roomNumbers.map(number => <option key={number} value={number}>{number}</option>)}
                        </select>
                        <br></br>
                        <label>Date:</label>
                        <input type='date' id='startDate' className="input" value={date} onChange={e => setDate(e.target.value)}></input>
                        <br></br>
                        <label>Total price:</label>
                        <input type='text' id='totalPrice' className="input" value={totalPrice + "$"} readOnly></input>
                        <br></br>
                    </div>
                    <div className="book-room-container-column cnopochka">
                        <button className='modal-content-btn bookroom' onClick={handleBooking}>Book</button>
                        {message && <p>{message}</p>}
                    </div>
                </form>
                <h2 className="alert">Upon entering the hotel, your passport will be checked. Reservations are not possible for persons under 18 years of age!!!</h2>
            </div>
        </div>
    );
}