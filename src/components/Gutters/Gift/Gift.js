import './Gift.css';
import Button from '../../Button/Button';
import arrowright from '../../img/arrow-right.svg';
import giftvoucher from '../../img/gift-voucher.jpg'

export default function Gift() {
    return (
        <div className="gift">
            <div className="gift-img">
                <img src={giftvoucher} alt="Gift Voucher"></img>
            </div>
            <div className="gift-content">
                <h3>
                    Purchase Your Gift Vouchers Today!
                </h3>
                <p>
                    We are excited to share with you the amazing gift vouchers we now have available at Holiday Inn Glasgow - East Kilbride. From delightful afternoon teas to overnight break packages, there's a gift for everyone!
                </p>
                <p>
                    Give the gift of travel!
                </p>
                <Button icon={arrowright} text="buy now!" className="gift-btn"/>
            </div>
        </div>
    );
}