import "./section1.scss"
import CircleBig from "../assets/circle-big.png"
import CircleSmall from "../assets/circle-small.png"
import Strip from "./imageStrip";
import { GContext } from "../../../App";
import { useContext } from "react";

function Section1() {
    const loaded = useContext(GContext).loaded
    const animate = {animationPlayState:loaded?"running":"paused"}
    return (
            <section className="main-sec1">
                <Header animate={animate}/>
                <section className="imageStrip">
                    <Strip animate={animate}/>
                </section>
            </section>)}

export default Section1

function Header({animate}) {

    function letterfy(str) {
        const charArray = Array.from(str);
        const letters = charArray.map((char, index) => {
        return <span key={index}  style={animate} className={"letter"+index}>{char}</span>
        })
        return letters
    };

    return <header>
        <Balls/>
        <h6>
            <div className="sentence1">
                {letterfy("Creativity&")}
            </div>
            <div className="sentence2">
                {letterfy("Functionality")}
            </div>
        </h6>
        <p style={animate}>Such a massive increase of year-over-year revenue can only mean one thing for a digital marketing company.</p>
    </header>;
}

function Balls() {
    return <div className="balls" >
        <img className="circleB" src={CircleBig} alt="Big Sphere" />
        <span className="center" ><img className="circleS" src={CircleSmall} alt="Small Sphere" /></span>
    </div>;
}
