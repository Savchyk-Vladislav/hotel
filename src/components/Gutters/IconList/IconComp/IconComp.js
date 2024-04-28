import './IconComp.css';
import ToolTip from './ToolTip/ToolTip';

export default function IconComp(props) {
    return (
        <div className="icon-block">
            <ToolTip img={props.img} tooltext={props.tooltext}/>
            <p>{props.text}</p>
        </div>
    );
}