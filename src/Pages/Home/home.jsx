import "./home.scss"
import Section1 from "./components/section1"
import Section2 from "./components/section2"
import Section3 from "./components/section3"


export default function Home() {
    return (
        <main className="home">
            <div className="bg-wrapper bg-blue-gradient"><Section1/></div>
            <Section2/>
            <Section3/>
            <section className="sec4"></section>
        </main>
    )
}


