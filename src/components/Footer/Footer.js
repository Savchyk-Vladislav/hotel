import './Footer.css';
import facebook from '../img/facebook.svg';
import twitter from '../img/twitter.svg';

export default function Footer() {
    return (
        <div className="footer">
            <p>Holiday Inn Glasgow - East Kilbride</p>
            <p>Stewartfield Way,</p>
            <p>East Kilbride</p>
            <p>G74 5LA, Scotland</p>
            <br></br>
            <a href='tel:+44-3333209328'>03333209328</a>
            <br></br>
            <div className='social-media'>
                <a href='https://www.facebook.com/HolidayInnGlasgowEastKilbride/'>
                    <img src={facebook} alt='facebook'></img>
                </a>
                <a href='https://twitter.com/HIGlasgowEK'>
                    <img src={twitter} alt='twitter'></img>
                </a>
            </div>
            <br></br>
            <div className='footer-links'>
                <a href='#'>Sustainability</a>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms of Use</a>
                <a href='#'>IHG One Rewards</a>
                <a href='#'>IHG Service Mark Statement</a>
                <a href='#'>Other Hotels</a>
                <a href='#'>Sitemap</a>
            </div>
        </div>
    );
}