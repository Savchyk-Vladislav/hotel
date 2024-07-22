import React, { useState } from 'react';
import './Tab1.css';
import ModalWindow from '../../ModalWindow/ModalWindow.js'

export default function Tab1() {
    const [showModal, setShowModal] = useState(false);
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');

    const handleBookNow = (event) => {
        event.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return(
        <div className="tab-1-pane">
            {showModal && <ModalWindow show={showModal} onClose={handleCloseModal} checkin={checkin} checkout={checkout} content="Tab1"/>}
            <div className="skinny-forms">
                <form id="bookingform">
                    <div className="column">
                        <label htmlFor="checkin">Check in</label>
                        <input type="date" name="checkin" className="input" onChange={e => setCheckin(e.target.value)}></input>
                    </div>
                    <div className="column">
                        <label htmlFor="checkout">Check out</label>
                        <input type="date" name="checkout" className="input" onChange={e => setCheckout(e.target.value)}></input>
                    </div>
                    <div className="column">
                        <button onClick={handleBookNow} className="btn form-btn">
                            Book Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}