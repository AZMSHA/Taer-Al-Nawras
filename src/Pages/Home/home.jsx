import "./home.scss"
import CircleBig from "../../BoilerImages/circle-big.png"
import CircleSmall from "../../BoilerImages/circle-small.png"
function Home() {
    return (
        <main>
            <section className="main-sec1">
                <img className="circleB" src={CircleBig} alt="" />
                <div className="circleWrapper"><img className="circleS" src={CircleSmall} alt="" /></div>
            </section>
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