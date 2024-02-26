import "./Styles/Hero.scss"
import Images from "./Images";
import { GContext } from "../../../App";
import { useContext } from "react";

function Hero() {
    const loaded = useContext(GContext).loaded
    const animate = {animationPlayState:loaded?"running":"paused"}

    function letterfy(str,delay) {
        const charArray = Array.from(str);
        const letters = charArray.map((char, index) => {
        return <span key={index}  style={{...animate,animationDelay:delay+"ms"}} className={"letter"+index}>{char}</span>
        })
        return letters
    };


    return (
            <section id="hero">
                <div className="hero-grid">
                    <Images  imageData={{
                        path: "src/pages/Home/assets/imageGrid",
                        count: 6,
                        formats: ["jpg", "png", "webp", "svg"]
                        }} multiple={0} delay={0} animate={animate}/>
                    <h1 className="neon">Taer Al-Nawras Signage</h1>
                    <p className="neon-p swim" style={{...animate}}>Start your journey to success with the Taer Al-Nawras signage company, and together, we'll compose a narrative of achievement.</p>
                </div>
            </section>)}

export default Hero
