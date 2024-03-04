import "./footer.scss";
import Logo from "../../assets/Logos/LogoNoOutline.svg?react";
import Button from "../Button/button";
import { GContext } from "../../App";
import { useContext } from "react";

export default function Footer() {
  return (
    <div className="footer bg-wrapper bg-white">
      <footer>
        <Banner />
        <figure>
          <Logo />
          <figcaption>Stand out from the rest</figcaption>
        </figure>
        <section className="social-links">
          <h2 className="gold-color">Check us out</h2>
          <ul>
            <li>
              <i className="fa-brands fa-instagram"></i>
              <a href="https://www.instagram.com">{"INSTAGRAM"}</a>
            </li>
            <li>
              <i className="fa-brands fa-facebook-f"></i>
              <a href="https://www.facebook.com">{"FACEBOOK"}</a>
            </li>
            <li>
              <i className="fa-brands fa-x-twitter"></i>
              <a href="https://www.x.com">{"X (TWITTER)"}</a>
            </li>
            <li>
              <i className="fa-brands fa-linkedin-in"></i>
              <a href="https://www.linkedin.com">{"LINKEDIN"}</a>
            </li>
          </ul>
        </section>

        <section className="contact-info">
          <h2 className="gold-color">Get in touch</h2>
          <address>
            <ul>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+923026492834">Phone Number</a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+923026492834">Phone Number 2</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:azmsha2003@gmail.com">Email</a>
              </li>
              <li>
                <i className="fa-solid fa-map-location-dot"></i>
                <a href="">Address</a>
              </li>
              <li id="businessTiming">
                <i className="fa-solid fa-clock"></i>
                <p>
                  Monday - Saturday : 9am - 6pm <br />
                  Friday : 9 am - 11 :30 am <br />
                  Sunday - Closed
                </p>
              </li>
            </ul>
          </address>
        </section>
        <Map />
      </footer>
    </div>
  );
}

function Map() {
  return (
    <iframe
      loading="lazy"
      src="https://maps.google.com/maps?q=Bushrat%20Hussain%20advertising&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
      title="Taer Al-Nawras address"
      aria-label="Taer Al-Nawras address"
    ></iframe>
  );
}

function Banner() {
  const open = useContext(GContext).openModal;
  return (
    <aside className="footer flex bg-gold-gradient-fixed">
      <h2>It&apos;s very easy to get a quote</h2>
      <Button onClick={open} Class={"btn-sec"}>
        Get a quote now!
      </Button>
    </aside>
  );
}
