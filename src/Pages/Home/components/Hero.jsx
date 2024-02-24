import "./Styles/Hero.scss"
import Strip from "./imageStrip";
import { GContext } from "../../../App";
import { useContext } from "react";

function Hero() {
    const loaded = useContext(GContext).loaded
    const animate = {animationPlayState:loaded?"running":"paused"}
    return (
            <section id="hero">
                <div className="hero-grid">
                    <Strip multiply={1} animate={animate}/>
                    <Strip multiply={4} animate={animate}/>
                    <h1 className="neon">Taer Al-Nawras Signage</h1>
                    <p className="neon-p">Start your journey to success with the Taer Al-Nawras signage company, and together, we'll compose a narrative of achievement.</p>
                </div>
            </section>)}

export default Hero
