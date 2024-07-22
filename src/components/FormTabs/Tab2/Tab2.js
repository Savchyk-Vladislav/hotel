import React, { useState } from 'react';
import './Tab2.css';
import ModalWindow from '../../ModalWindow/ModalWindow';

export default function Tab2() {
    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState('');
    const [capacity, setCapacity] = useState('0');

    const handleBookNow = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleCapacityChange = (event) => {
        setCapacity(event.target.value);
    };

    return(
        <div className="tab-3-pane">
            {showModal && <ModalWindow show={showModal} onClose={handleCloseModal} date={date} capacity={capacity} content="Tab2"/>}
            <div className="skinny-forms">
                <form id="meetingsbooker">
                    <div className="column">
                        <label htmlFor="checkin">People</label>
                        <input type="text" name="checkin" className="input" onChange={handleCapacityChange}></input>
                    </div>
                    <div className="column">
                        <label htmlFor="checkout">Date</label>
                        <input type="date" name="checkout" className="input" onChange={handleDateChange}></input>
                    </div>
                    <div className="column">
                        <button onClick={handleBookNow} className="btn form-btn">
                            Pick a room
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}