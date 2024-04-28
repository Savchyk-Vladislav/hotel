import './Tab3.css';
import Button from '../../Button/Button';

export default function Tab3() {
    return(
        <div className="tab-2-pane">
            <div className="skinny-forms">
                <form id="contact-us-form">
                    <div className="column-tab3">
                        <div className="field">
                            <label htmlFor="contactName">Name</label>
                            <input required type="text" name="contactName" className="input" placeholder="Name" id="contactName"></input>
                        </div>
                        <div className="field">
                            <label htmlFor="contactTelephone">Telephone</label>
                            <input required type="text" name="contactTelephone" className="input" placeholder="Telephone" id="contactTelephone"></input>
                        </div>
                        <div className="field">
                            <label htmlFor="contactEmail">Email</label>
                            <input required type="email" name="contactEmail" className="input" placeholder="Email" id="contactEmail"></input>
                        </div>
                        <div className="field">
                            <label htmlFor="subject" id="label-for-subject">Subject</label>
                            <select name="subject" id="contactSubject" required>
                                <option selected="selected" value>
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
                            <textarea required type="text" name="contactMessage" className="textarea" placeholder="How can we help you?" id="contactMessage"></textarea>
                        </div>
                        <div className="field">
                            <label htmlFor="contactWay">How would you like to be contacted?</label>
                            <div className="for-checkboxes">
                                <div className="for-checkbox">
                                    <input type="checkbox" name="contactWayPhone" className="input" id="contactWayPhone"></input>
                                    <label htmlFor="contactWayPhone">Phone</label>
                                </div>
                                <div className="for-checkbox">
                                    <input type="checkbox" name="contactWayEmail" className="input" id="contactWayEmail"></input>
                                    <label htmlFor="contactWayEmail">Email</label>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="contactWay">What time of day would you like to be contacted?</label>
                            <div className="for-checkboxes">
                                <div className="for-checkbox">
                                    <input type="checkbox" name="contactTimeMorning" className="input" id="contactTimeMorning"></input>
                                    <label htmlFor="contactTimeMorning">Morning</label>
                                </div>
                                <div className="for-checkbox">
                                    <input type="checkbox" name="contactTimeAfternoon" className="input" id="contactTimeAfternoon"></input>
                                    <label htmlFor="contactTimeAfternoon">Afternoon</label>
                                </div>
                                <div className="for-checkbox">
                                    <inputY type="checkbox" name="contactTimeEvening" className="input" id="contactTimeEvening"></inputY>
                                    <label htmlFor="contactTimeEvening">Evening</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column-tab3">
                        <div className="field">
                            <Button text="send" className="form-btn"/>
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