import "./home.scss"
import Section1 from "./components/section1"
import Section2 from "./components/section2"
import Section3 from "./components/section3"
import Section4 from "./components/section4"
import Section5 from "./components/section5"

export default function Home() {
    return (
        <main className="home">
            <Section1/>
            <Section3/>
            <div className="bg-wrapper bg-grayscales-fixed"><Section4/></div>
            <Section5/>
        </main>
    )
}


