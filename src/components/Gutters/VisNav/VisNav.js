import './VisNav.css';
import VisNavItem from './VisNavItem/VisNavItem';
import data from './data.js';

export default function VisNav() {
    return (
        <>
            <div className="visnav">
                <VisNavItem img={data[0].img} href="#" text={data[0].text} overlaytext={data[0].overlaytext}/>
                <VisNavItem img={data[1].img} href="#" text={data[1].text} overlaytext={data[1].overlaytext}/>
                <VisNavItem img={data[2].img} href="#" text={data[2].text} overlaytext={data[2].overlaytext}/>
                <VisNavItem img={data[3].img} href="#" text={data[3].text} overlaytext={data[3].overlaytext}/>
            </div>
            <div className="visnav">
                <VisNavItem img={data[4].img} href="#" text={data[4].text} overlaytext={data[4].overlaytext}/>
                <VisNavItem img={data[5].img} href="#" text={data[5].text} overlaytext={data[5].overlaytext}/>
                <VisNavItem img={data[6].img} href="#" text={data[6].text} overlaytext={data[6].overlaytext}/>
                <VisNavItem img={data[7].img} href="#" text={data[7].text} overlaytext={data[7].overlaytext}/>
            </div>
        </>
    );
}