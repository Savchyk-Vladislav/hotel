import './Navbar.css';

export default function Navbar() {
    return(
        <nav className="navbar">
            <div className="navbar-menu">
                <div className="navbar-menu-content">
                    <a href="#" className="navbarBtn">Dining</a>
                    <a href="#" className="navbarBtn">Offers</a>
                    <a href="#" className="navbarBtn">Events</a>
                    <a href="#" className="navbarBtn">Weddings</a>
                    <a href="#" className="navbarBtn">Leisure</a>
                </div>
            </div>
        </nav>
    );
}