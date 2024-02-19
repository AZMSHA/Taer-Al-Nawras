import "./footer.scss"
import Logo from "../../assets/Logos/LogoNoOutline.svg?react"
import Button from "../Button/button"


export default function Footer() {

    return <>
        <footer>
            <Banner/>
            <Map/>
            <section className="contact-info">
                <h2 className="gold-color">Get in touch</h2>
                <address>
                    <ul>
                        <li><a href="tel:+923026492834"><i class="fa-solid fa-phone"></i>Phone Number</a></li>
                        <li><a href="mailto:azmsha2003@gmail.com">Email</a></li>
                        <li><a href="">Address</a></li>
                        <li id="businessTiming">Monday - Saturday : 9am - 6pm <br />Friday : 9 am - 11 :30 am <br />Sunday - Closed</li>
                    </ul>
                </address>
            </section>
            <section className="social-links">
                <h2 className="gold-color">Check us out</h2>
                <ul>
                    <li><a href="https://www.instagram.com">{"INSTAGRAM"}</a></li>
                    <li><a href="https://www.facebook.com">{"FACEBOOK"}</a></li>
                    <li><a href="https://www.x.com">{"X (TWITTER)"}</a></li>
                    <li><a href="https://www.linkedin.com">{"LINKEDIN"}</a></li>
                </ul>
            </section>
            <figure>
                <Logo/>
                <figcaption>Stand out from the rest</figcaption>
            </figure>
        </footer>
    </>
}

function Map () {
    return <iframe loading="lazy" src="https://maps.google.com/maps?q=Bushrat%20Hussain%20advertising&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="Bushrat Hussain advertising" aria-label="Bushrat Hussain advertising"></iframe>
}

function Banner() {
    return (
        <aside className="footer flex bg-gold-gradient-fixed"><h2>It's very easy to get a quote</h2><Button Class={"btn-sec"}>Get a quote now!</Button></aside>
    )
}
