import './EmailSubscribe.css';

export default function EmailSubscribe() {
    return (
        <div className="email-subscribe">
            <div className="email-subscribe-container">
                <h2><b>SIGN UP</b> TO RECEIVE OFFERS BY EMAIL</h2>
                <p>Enter your details to receive exclusive deals and updates. Don't worry, we won't share your details with anyone else, just share offers and updates we think you'll be interested in.</p>
                <form>
                    <div className="name-email">
                        <div className="name-email-item">
                            <label>First Name</label>
                            <input type="text" style={{width: 150}}></input>
                        </div>
                        <div className="name-email-item">
                            <label>Email address</label>
                            <input type="text" style={{width: 315}}></input>
                        </div>
                    </div>
                    <p>Tell us what you are interested in</p>
                    <div className="name-email" style={{width: 400}}>
                        <div className="name-email-item">
                            <div className="radio">
                                <input type="radio" id='family-events'></input>
                                <label>Family events</label>
                            </div>
                            <div className="radio">
                                <input type="radio" id='weddings'></input>
                                <label>Weddings</label>
                            </div>
                            <div className="radio">
                                <input type="radio" id='meetings'></input>
                                <label>Meetings</label>
                            </div>
                        </div>
                        <div className="name-email-item">
                            <div className="radio">
                                <input type="radio" id='party-nights'></input>
                                <label>Party nights</label>
                            </div>
                            <div className="radio">
                                <input type="radio" id='christmas'></input>
                                <label>Christmas</label>
                            </div>
                            <div className="radio">
                                <input type="radio" id='leisure-stays'></input>
                                <label>Leisure Stays</label>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="radio">
                        <input type='checkbox' id='consent-to-receiving'></input>
                        <label>I consent to receiving email communications from Holiday Inn Glasgow - East Kilbride</label>
                    </div>
                    <br></br>
                    <button className="footer-form-btn">Submit</button>
                </form>
            </div>
        </div>
    );
}