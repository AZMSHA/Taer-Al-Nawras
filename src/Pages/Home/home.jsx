import "./home.scss"
import Section1 from "./components/section1"

function Home() {
    return (
        <main>
            <div className="bg-wrapper bg-blue-gradient"><Section1/></div>
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