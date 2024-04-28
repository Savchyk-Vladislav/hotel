import './Tab2.css';
import Button from '../../Button/Button';

export default function Tab2() {
    return(
        <div className="tab-3-pane">
            <div className="skinny-forms">
                <form id="meetingsbooker">
                    <div className="column">
                        <label htmlFor="checkin">People</label>
                        <input type="text" name="checkin" className="input"></input>
                    </div>
                    <div className="column">
                        <label htmlFor="checkout">Date</label>
                        <input type="date" name="checkout" className="input"></input>
                    </div>
                    <div className="column">
                        <Button text="Pick a room" className="form-btn"/>
                    </div>
                </form>
            </div>
        </div>
    );
}