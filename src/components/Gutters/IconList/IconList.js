import './IconList.css';
import IconComp from './IconComp/IconComp';
import data from './data';

export default function IconList() {
    return (
        <div className="icon-list">
            <div className="icon-list-container">
                <IconComp img={data[0].img} tooltext={data[0].tooltext} text={data[0].text}/>
                <IconComp img={data[1].img} tooltext={data[1].tooltext} text={data[1].text}/>
                <IconComp img={data[2].img} tooltext={data[2].tooltext} text={data[2].text}/>
                <IconComp img={data[3].img} tooltext={data[3].tooltext} text={data[3].text}/>
                <IconComp img={data[4].img} tooltext={data[4].tooltext} text={data[4].text}/>
                <IconComp img={data[5].img} tooltext={data[5].tooltext} text={data[5].text}/>
                <IconComp img={data[6].img} tooltext={data[6].tooltext} text={data[6].text}/>
                <IconComp img={data[7].img} tooltext={data[7].tooltext} text={data[7].text}/>
                <IconComp img={data[8].img} tooltext={data[8].tooltext} text={data[8].text}/>
            </div>
        </div>
    );
}