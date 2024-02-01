import "./section1.scss"
import CircleBig from "../assets/circle-big.png"
import CircleSmall from "../assets/circle-small.png"
import { lazy } from "react";

const LazyStrip = lazy(()=>import("./imageStrip"))

function Section1() {
    function letterfy(str) {
        const charArray = Array.from(str);
        const letters = charArray.map((char, index) => {
        return <span key={index} className={"letter"+index}>{char}</span>
        })
        return letters
    };

    return (
            <section className="main-sec1">
                <header>
                <div className="balls">
                    <img className="circleB" src={CircleBig} alt="Big Sphere" />
                    <span className="center"><img className="circleS" src={CircleSmall} alt="Small Sphere" /></span>
                </div>
                    <h6>
                        <div className="sentence1">
                            {letterfy("Creativity&")}
                        </div>
                        <div className="sentence2">
                            {letterfy("Functionality")}
                        </div>
                    </h6>
                    <p>Such a massive increase of year-over-year revenue can only mean one thing for a digital marketing company.</p>
                </header>
            <section className="imageStrip">
                <LazyStrip/>
                </section>
            </section>)}

export default Section1