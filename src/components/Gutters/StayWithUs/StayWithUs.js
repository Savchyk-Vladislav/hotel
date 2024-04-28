import './StayWithUs.css';
import staywithus from '../../img/staywithus.jpeg';
import message from '../../img/message.svg';
import Button from '../../Button/Button';

export default function StayWithUs() {
    return (
        <div className="staywithus">
            <div className="staywithus-container">
                <div className="staywithus-container-column">
                    <img src={staywithus} alt="Stay With Us"></img>
                </div>
                <div className="staywithus-container-column">
                    <h3>
                        Stay with us and stay comfortable
                    </h3>
                    <p>
                        If you are searching for Glasgow East Kilbride hotels or indeed Glasgow hotels, our centrally located hotel, should be top of your list. 
                    </p>
                    <p>
                        Within easy reach of Glasgow's city centre (12 miles), the Holiday Inn Glasgow-East Kilbride hotel, complete with 101 air conditioned guestrooms, is conveniently located just outside the city. The M77, M8 & M74 motorways networks are easily accessible as are Glasgow & Airports.
                    </p>
                    <p>
                        Enjoy a leisurely dinner from our Dine All Day menu in our new Open Lobby, or grab a Starbucks or a refreshing drink from the bar.
                    </p>
                    <p>
                        The Holiday Inn Glasgow - East Kilbride hotel is in an excellent position to visit local attractions. Visit the East Kilbride Shopping Centre, one of Scotland's largest indoor malls, stroll the cobbled streets of the attractive old village or there's Calder glen Country Park with its nature walks and adventure playground. There's also the East Kilbride Village Theatre, the Museum of Rural Life, golf, ten pin bowling, a multi screen cinema, an ice rink plus Scotland's largest theme park, M&D's, just a short drive away.
                    </p>
                    <p>
                        With complimentary access for guests, our impressive You Fit Club complete with indoor pool and fully equipped gym, is perfect for relaxing and adding that extra touch of luxury to your visit. Or why not make your stay a spa break and take advantage of one of the many beauty sessions at our Health & Beauty salon.
                    </p>
                    <p>
                        If you are visiting Glasgow or East Kilbride on business, our hotel features fully air conditioned meeting rooms and helpful staff, to create the perfect working environment for you. With capacity to hold events for up to 400 guests and high speed internet access throughout, the Holiday Inn Glasgow-East Kilbride hotel is the ideal venue for any meeting or event.
                    </p>
                    <p>
                        With plenty of facilities and amenities available, book your stay with us today. Call our reservations team on 0333 320 9328 and we'll look forward to welcoming you soon.
                    </p>
                    <p></p>
                    <p></p>
                    <Button icon={message} text="Contact our hotel" className="contact-with-us-btn"/>
                </div>
            </div>
        </div>
    );
}