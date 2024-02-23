import "./Styles/Hero.scss"
import Strip from "./imageStrip";
import { GContext } from "../../../App";
import { useContext } from "react";

function Hero() {
    const loaded = useContext(GContext).loaded
    const animate = {animationPlayState:loaded?"running":"paused"}
    return (
            <section className="hero">
                <div className="hero-grid">
                    <Strip multiply={1} animate={animate}/>
                    <Strip multiply={4} animate={animate}/>
                    <h1 className="neon">Taer Al-Nawras Signage</h1>
                    <p className="neon-p">Start your journey to success with the Taer Al-Nawras signage company, and together, we'll compose a narrative of achievement.</p>
                </div>
            </section>)}

export default Hero

/**function Header({animate}) {

    function letterfy(str) {
        const charArray = Array.from(str);
        const letters = charArray.map((char, index) => {
        return <span key={index}  style={animate} className={"letter"+index}>{char}</span>
        })
        return letters
    };

    return <header>
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
}**/

