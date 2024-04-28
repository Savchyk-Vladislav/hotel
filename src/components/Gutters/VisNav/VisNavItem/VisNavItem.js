import './VisNavItem.css';

export default function VisNavItem(props) {
    return (
        <div>
            <a className="visnav-item" href={props.href}>
                <img src={props.img} alt="Visnav Item"></img>
                <h3>
                    {props.text}
                </h3>
                <div className="overlay">
                    <p>
                        {props.overlaytext}
                    </p>
                </div>
            </a>
        </div>
    );      
}