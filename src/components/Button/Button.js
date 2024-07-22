import './Button.css';

export default function Button(props) {
    const combinedClassName = `btn ${props.className || ''}`;

    function addActiveClass() {
        const modalBack = document.querySelector('.modal-window-back');
        modalBack.classList.add('active');
    }

    function handleClick(event) {
        if (props.onModal === 'modal') {
            addActiveClass();
        }
    }

    return(
        <a href={props.href} className={combinedClassName} onClick={handleClick}>
            {!props.icon && null}
            {props.icon && <img src={props.icon} alt="phone-icon" className="btn-icon"></img>}
            {props.text}
        </a>
    );
}