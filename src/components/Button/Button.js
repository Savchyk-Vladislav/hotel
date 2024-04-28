import './Button.css';

export default function Button(props) {
    const combinedClassName = `btn ${props.className || ''}`;

    return(
        <a href={props.href} className={combinedClassName}>
            {!props.icon && null}
            {props.icon && <img src={props.icon} alt="phone-icon" className="btn-icon"></img>}
            {props.text}
        </a>
    );
}