import "./section2.scss"
import Sec2Image from "../assets/sec2-banner.jpg"

export default function Section2() {
    return <section className="sec2">
        <img src={Sec2Image} alt="Depiction of designers in a meeting" />
        <article>
            <h1><span className="gold-color">Taer Al-Nawras</span> Innovative Signage and Printing</h1>
            <p>Start your journey to success with the Taer Al-Nawras signage company, and together, we'll compose a narrative of achievement.</p>
        </article>
    </section>
}