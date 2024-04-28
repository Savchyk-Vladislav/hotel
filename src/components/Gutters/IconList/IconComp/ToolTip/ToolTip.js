import './ToolTip.css';

export default function ToolTip(props) {
    return (
        <div className="tooltip">
            <img src={props.img} alt="icon"></img>
            <span className="tooltiptext">{props.tooltext}</span>
        </div>
    );
}