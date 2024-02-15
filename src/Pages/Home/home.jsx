import "./home.scss"
import Section1 from "./components/section1"
import Section2 from "./components/section2"
import Section3 from "./components/section3"
import Section4 from "./components/section4"
import Section5 from "./components/section5"
import Button from "../../Components/Button/button"
import Cheat from "./components/cheat"


export default function Home() {
    return (
        <main className="home">
            <div className="bg-wrapper bg-blue-gradient"><Section1/></div>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Banner/>
            <Cheat/>
        </main>
    )
}

function Banner() {
    return (
        <aside className="flex bg-gold-gradient-linear"><h2>Want to consult with our team?</h2><Button Class={"btn-sec"}>Get a quote now!</Button></aside>
    )
}


