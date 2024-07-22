import React, { useState } from 'react';
import './ModalWindow.css';
import closeIcon from '../img/x.svg';
import ModalContent1 from '../FormTabs/Tab1/ModalContent1/ModalContent1';
import BookRoom from '../FormTabs/Tab1/BookRoom/BookRoom';
import ModalContent2 from '../FormTabs/Tab2/ModelContent2/ModelContent2';
import BookMeetingRoom from '../FormTabs/Tab2/BookMeetingRoom/BookMeetingRoom';

export default function ModalWindow({ onClose, checkin, checkout, show, content, date, capacity }) {
    const [showBookRoom, setShowBookRoom] = useState(false);
    const [showBookMeetingRoom, setShowBookMeetingRoom] = useState(false);
    const classes = `modal-window ${show ? 'show' : ''}`;
    
    const handleBookNow = () => {
        if (content === 'Tab1') {
            setShowBookRoom(true);
        } else if (content === 'Tab2') {
            setShowBookMeetingRoom(true); 
        }
    };

    const renderContent = () => {
        if (content === 'Tab1') {
            return showBookRoom ? <BookRoom /> : <ModalContent1 startDate={checkin} endDate={checkout} onBookNow={handleBookNow} />;
        } else if (content === 'Tab2') {
            return showBookMeetingRoom ? <BookMeetingRoom /> : <ModalContent2 date={date} capacity={capacity} onBookNow={handleBookNow} />;
        }
    };

    return (
        <div className="modal-window-back">
            <div className={classes}>
                <button onClick={onClose}>
                    <img src={closeIcon} className="closeBtn"/>
                </button>
                {renderContent()}
            </div>
        </div>
    );
}