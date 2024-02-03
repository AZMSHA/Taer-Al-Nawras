import "./section1.scss"
import CircleBig from "../assets/circle-big.png"
import CircleSmall from "../assets/circle-small.png"
import Strip from "./imageStrip";
import { useState } from "react";


function Section1() {
    const [loaded, setLoaded] = useState(0);
    const condition = loaded===5;

    function count () {
        setLoaded(counter => counter + 1)
    }

    return (
            <section className="main-sec1">
                <Header animate={condition} count={count}/>
                <section className="imageStrip">
                    <Strip animate={condition} count={count}/>
                </section>
            </section>)}

export default Section1

function Header(props) {

    function letterfy(str) {
        const charArray = Array.from(str);
        const letters = charArray.map((char, index) => {
        return <span key={index} className={"letter"+index}>{char}</span>
        })
        return letters
    };

    return <header>
        <Balls {...props}/>
        <h6>
            <div className="sentence1">
                {letterfy("Creativity&")}
            </div>
            <div className="sentence2">
                {letterfy("Functionality")}
            </div>
        </h6>
        <p>Such a massive increase of year-over-year revenue can only mean one thing for a digital marketing company.</p>
    </header>;
}

function Balls({count}) {
    return <div className="balls" >
        <img className="circleB" onLoad={count} src={CircleBig} alt="Big Sphere" />
        <span className="center" ><img className="circleS" onLoad={count} src={CircleSmall} alt="Small Sphere" /></span>
    </div>;
}
