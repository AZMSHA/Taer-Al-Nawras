import "./home.scss"
import Section1 from "./components/section1"
import Section2 from "./components/section2"
import Section3 from "./components/section3"
import Section4 from "./components/section4"


export default function Home() {
    return (
        <main className="home">
            <div className="bg-wrapper bg-blue-gradient"><Section1/></div>
            <Section2/>
            <Section3/>
            <Section4/>
        </main>
    )
}


