import React, { useState } from 'react';
import './Tab3.css';

export default function Tab3() {
    const [client_name, setClientName] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [how_contacted, setHowContacted] = useState([]);
    const [when_contacted, setWhenContacted] = useState([]);
    const [formStatus, setFormStatus] = useState('');

    const handleContactWayChange = (event) => {
        if (event.target.checked) {
            setHowContacted([...how_contacted, event.target.name]);
        } else {
            setHowContacted(how_contacted.filter(item => item !== event.target.name));
        }
    };

    const handleContactTimeChange = (event) => {
        if (event.target.checked) {
            setWhenContacted([...when_contacted, event.target.name]);
        } else {
            setWhenContacted(when_contacted.filter(item => item !== event.target.name));
        }
    };

    const handleClick = async (event) => {
        event.preventDefault();

        let contact = {
            client_name,
            phone_number,
            email,
            subject,
            message,
            how_contacted: how_contacted.join(', '),
            when_contacted: when_contacted.join(', '),  
        };
        for (let field in contact) {
            if (!contact[field]) {
                setFormStatus('Please fill out all fields!!!');
                return;
            }
        }
        contact = {...contact, processed: false};
        try {
            const response = await fetch('http://localhost:5000/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contact),
            });
            if (response.ok) {
                setFormStatus('The application has been successfully processed!');
            } else {
                throw new Error('Помилка серверу');
            }
        } catch (error) {
            setFormStatus('An error occurred while sending data.');
        }
    };

    return (
        <div className="tab-2-pane">
            <div className="skinny-forms">
                <form id="contact-us-form">
                    <div className="column-tab3">
                        <div className="field">
                            <label htmlFor="contactName">Name</label>
                            <input required type="text" name="client_name" className="input" placeholder="Name" id="contactName" value={client_name} onChange={(e) => setClientName(e.target.value)}></input>
                        </div>
                        <div className="field">
                            <label htmlFor="contactTelephone">Telephone</label>
                            <input required type="text" name="phone_number" className="input" placeholder="Telephone" id="contactTelephone" value={phone_number} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                        </div>
                        <div className="field">
                            <label htmlFor="contactEmail">Email</label>
                            <input required type="email" name="email" className="input" placeholder="Email" id="contactEmail" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="field">
                            <label htmlFor="subject" id="label-for-subject">Subject</label>
                            <select name="subject" id="contactSubject" required value={subject} onChange={(e) => setSubject(e.target.value)}>
                                <option id="subject-please-select-a-subject" value="Please select a subject">
                                    Please select a subject
                                </option>
                                <option id="subject-reservations" value="Reservations">
                                    Reservations
                                </option>
                                <option id="subject-events-and-functions" value="Event and Functions">
                                    Event and Functions
                                </option>
                                <option id="subject-meetings-and-conferences" value="Meeting and Conferences">
                                    Meeting and Conferences
                                </option>
                                <option id="subject-weddings" value="Weddings">
                                    Weddings
                                </option>
                                <option id="subject-park-stay-and-go" value="Park, Stay and Go">
                                    Park, Stay and Go
                                </option>
                                <option id="subject-health" value="Health Club">
                                    Health Club
                                </option>
                                <option id="subject-leisure-breaks" value="Leisure Breaks">
                                    Leisure Breaks
                                </option>
                                <option id="subject-christmas" value="Christmas">
                                    Christmas
                                </option>
                                <option id="subject-restaurant" value="Restaurant">
                                    Restaurant
                                </option>
                                <option id="subject-greenfingers-charity" value="Greenfingers">
                                    Greenfingers
                                </option>
                                <option value="Other">
                                    Other
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="column-tab3">
                        <div className="field">
                            <label htmlFor="contactMessage">Message</label>
                            <textarea required type="text" name="message" className="textarea" placeholder="How can we help you?" id="contactMessage" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                        <div className="field">
                            <label htmlFor="contactWay">How would you like to be contacted?</label>
                            <div className="for-checkboxes">
                                <div className="for-checkbox">
                                    <input type="checkbox" name="Phone" className="input" id="contactWayPhone" onChange={handleContactWayChange}></input>
                                    <label htmlFor="contactWayPhone">Phone</label>
                                </div>
                                <div className="for-checkbox">
                                    <input type="checkbox" name="Email" className="input" id="contactWayEmail" onChange={handleContactWayChange}></input>
                                    <label htmlFor="contactWayEmail">Email</label>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="contactWay">What time of day would you like to be contacted?</label>
                            <div className="for-checkboxes">
                                <div className="for-checkbox">
                                    <input type="checkbox" name="Morning" className="input" id="contactTimeMorning" onChange={handleContactTimeChange}></input>
                                    <label htmlFor="contactTimeMorning">Morning</label>
                                </div>
                                <div className="for-checkbox">
                                    <input type="checkbox" name="Afternoon" className="input" id="contactTimeAfternoon" onChange={handleContactTimeChange}></input>
                                    <label htmlFor="contactTimeAfternoon">Afternoon</label>
                                </div>
                                <div className="for-checkbox">
                                    <input type="checkbox" name="Evening" className="input" id="contactTimeEvening" onChange={handleContactTimeChange}></input>
                                    <label htmlFor="contactTimeEvening">Evening</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column-tab3">
                        <div className="field">
                        <button className="btn form-btn" onClick={handleClick}>
                            Send
                        </button>
                        {formStatus && <p>{formStatus}</p>}
                        </div>
                        <div className="field">
                            <div className="for-labels">
                                <label>Check-in: 16:00</label>
                                <label>Check-out: 12:00</label>
                                <label>Mininum check-in age: 18</label>
                            </div>
                        </div>
                        <div className="field">
                            <div className="for-labels">
                                <label id="label-telephone">Telephone:</label>
                                <a id="contact-form-telephone" href="tel:+44-3333209328">03333209328</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}