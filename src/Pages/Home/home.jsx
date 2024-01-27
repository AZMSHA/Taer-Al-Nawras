import "./home.scss"
import Section1 from "./components/section1"

function Home() {
    return (
        <main>
            <Section1/>
            <section className="main-sec2">
                second Section
            </section>
            <section className="main-sec3">
                third Section
            </section>
            <section className="main-sec4">
                Fourth Section
            </section>
        </main>
    )
}

export default Home