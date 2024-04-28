import './Tab1.css';
import Button from '../../Button/Button';

export default function Tab1() {
    return(
        <div className="tab-1-pane">
            <div className="skinny-forms">
                <form id="bookingform">
                    <div className="column">
                        <label htmlFor="checkin">Check in</label>
                        <input type="date" name="checkin" className="input"></input>
                    </div>
                    <div className="column">
                        <label htmlFor="checkout">Check out</label>
                        <input type="date" name="checkout" className="input"></input>
                    </div>
                    <div className="column">
                        <Button text="Book now" className="form-btn"/>
                    </div>
                </form>
            </div>
        </div>
    );
}