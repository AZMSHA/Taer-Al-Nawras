import "./home.scss"
import CircleBig from "../../BoilerImages/circle-big.png"
import CircleSmall from "../../BoilerImages/circle-small.png"
function Home() {

    function letterfy(str) {
        const charArray = Array.from(str);
        const letters = charArray.map((char, index) => {
        return <span className={"letter"+index}>{char}</span>
        })
        return letters
    };

    return (
        <main>
            <section className="main-sec1">
                <div className="balls">
                    <img className="circleB" src={CircleBig} alt="" />
                    <span className="center"><img className="circleS" src={CircleSmall} alt="" /></span>
                </div>
                <header>
                    <h6>
                        <div className="sentence1">
                            {letterfy("Creativity&")}
                        </div>
                        <div className="sentence2">
                            {letterfy("Functionality")}
                        </div>
                    </h6>
                    <p>Such a massive increase of year-over-year revenue can only mean one thing for a digital marketing company.</p>
                </header>
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