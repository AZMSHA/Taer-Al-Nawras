import "./Home.scss"
import Hero from "./components/Hero.jsx"
import Services from "./components/Services.jsx"
import Reviews from "./components/Reviews.jsx"
import Steps from "./components/Steps.jsx"
import About from "../About/about.jsx"

export default function Home() {
    return (
        <main id="home">
            <Hero/>
            <Services/>
            <div className="bg-wrapper bg-grayscales-fixed"><Reviews/></div>
            <Steps/>
            <About/>
        </main>
    )
}


