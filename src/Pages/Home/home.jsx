import "./home.scss"
import Section1 from "./components/section1"
import Sec2Image from "./assets/sec2-banner.jpg"

function Home() {
    return (
        <main>
            <div className="bg-wrapper bg-blue-gradient"><Section1/></div>
            <section className="main-sec2">
                <img src={Sec2Image} alt="Depiction of designers in a meeting"/>
                <article>
                    <h1><span className="color-gold">Taer Al-Nawras</span> Innovative Signage and Printing</h1>
                    <p>Start your journey to success with the Taer Al-Nawras signage company, and together, we'll compose a narrative of achievement.</p>
                </article>
            </section>
            <section className="main-sec3">

            </section>
            <section className="main-sec4">

            </section>
        </main>
    )
}

export default Home