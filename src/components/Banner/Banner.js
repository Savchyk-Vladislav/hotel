import './Banner.css';
import data from './data';
import Slide from './Slide/Slide';

export default function Banner() {
    return(
        <div className="slider">
            <div className="slides">
                <input type="radio" name="r" id="r1" />
                <input type="radio" name="r" id="r2" />
                <input type="radio" name="r" id="r3" />
                <input type="radio" name="r" id="r4" />
                <input type="radio" name="r" id="r5" />
                <input type="radio" name="r" id="r6" />
                <input type="radio" name="r" id="r7" />
                <input type="radio" name="r" id="r8" />

                <Slide className="s1" img={data[0].img} head={data[0].head} main={data[0].main}/>
                <Slide img={data[1].img} head={data[1].head} main={data[1].main}/>
                <Slide img={data[2].img} head={data[2].head} main={data[2].main}/>
                <Slide img={data[3].img} head={data[3].head} main={data[3].main}/>
                <Slide img={data[4].img} head={data[4].head} main={data[4].main}/>
                <Slide img={data[5].img} head={data[5].head} main={data[5].main}/>
                <Slide img={data[6].img} head={data[6].head} main={data[6].main}/>
                <Slide img={data[7].img} head={data[7].head} main={data[7].main}/>
            </div>

            <div className="navigation">
                <label htmlFor="r1" className="bar"></label>
                <label htmlFor="r2" className="bar"></label>
                <label htmlFor="r3" className="bar"></label>
                <label htmlFor="r4" className="bar"></label>
                <label htmlFor="r5" className="bar"></label>
                <label htmlFor="r6" className="bar"></label>
                <label htmlFor="r7" className="bar"></label>
                <label htmlFor="r8" className="bar"></label>
            </div>
        </div>
    );
}