import './Geo.css';

export default function Geo() {
    return (
        <div className="geo">
            <div className="geo-content">
                <a id='geo'></a>
                <h2>Getting Here</h2>
                <div className="geo-content-text">
                    <p>
                        Holiday Inn Glasgow - East Kilbride
                    </p>
                    <p>
                        Stewartfield Way, East Kilbride G74 5LA, Scotland
                    </p>
                    <p>
                        Tel: <a href="tel:+44-3333209328">03333 209 328</a>
                    </p>
                </div>
            </div>
            <div className="geo-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6347.672659878919!2d-4.226695407749079!3d55.77168276702173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488838a7be68ce61%3A0x4ec9514da1e9af39!2sHoliday%20Inn%20Glasgow%20-%20East%20Kilbride%2C%20an%20IHG%20Hotel!5e0!3m2!1suk!2sua!4v1714220194406!5m2!1suk!2sua" title="map"></iframe>
            </div>
        </div>
    );
}