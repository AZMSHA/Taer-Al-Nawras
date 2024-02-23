import "./home.scss"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Reviews from "./components/Reviews"
import Steps from "./components/Steps"

export default function Home() {
    return (
        <main className="home">
            <Hero/>
            <Services/>
            <div className="bg-wrapper bg-grayscales-fixed"><Reviews/></div>
            <Steps/>
        </main>
    )
}


