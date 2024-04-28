import './Logo.css';
import logo from '../img/Logo.svg';

export default function Logo() {
    return(
        <img src={logo} alt="Logo" className="logo"></img>
    );
}