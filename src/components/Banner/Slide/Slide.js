import './Slide.css';

export default function Slide(props) {
    const combinedClassName = `slide ${props.className || ''}`;

    return(
        <div className={combinedClassName}>
            <img src={props.img} alt=""></img>
            <div className="slide-text">
                <h1>
                    {props.head}
                </h1>
                <h3>
                    {props.main}
                </h3>
            </div>
        </div>
    );
}