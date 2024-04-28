import './Gutters.css';
import IconList from './IconList/IconList';
import StayWithUs from './StayWithUs/StayWithUs';
import Gift from './Gift/Gift';
import VisNav from './VisNav/VisNav';
import Geo from './Geo/Geo';
import Gallery from './Gallery/Gallery';

export default function Gutters() {
    return (
        <div className="gutters">
            <IconList />
            <StayWithUs />
            <Gift />
            <VisNav />
            <Geo />
            <Gallery />
        </div>
    );
}