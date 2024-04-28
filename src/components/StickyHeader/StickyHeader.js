import './StickyHeader.css';
import Button from '../Button/Button';
import phoneIcon from '../img/phone-icon.svg';
import geoIcon from '../img/geo-icon.svg';
import menuIcon from '../img/menu-icon.svg';

export default function StickyHeader() {
    return(
        <div className="sticky-header">
            <Button href="#contact" icon={phoneIcon}/>
            <Button href="#geo" icon={geoIcon}/>
            <Button href="#" icon={menuIcon}/>
        </div>
    );
}