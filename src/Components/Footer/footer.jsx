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

        <section className="contact-info">
          <h2 className="gold-color">Get in touch</h2>
          <address>
            <ul>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a
                  title="give us a call"
                  href="tel:+971553677009"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +971553677009
                </a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a
                  title="give us a call"
                  href="tel:+971509055365"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +971509055365
                </a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a
                  title="Send us an Email?"
                  href="mailto:nawrassign2@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  nawrassign2@gmail.com
                </a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a
                  title="Send us an Email?"
                  href="mailto:alnawras.signdxb@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  alnawras.signdxb@gmail.com
                </a>
              </li>
              <li>
                <i className="fa-solid fa-map-location-dot"></i>
                <a
                  id="footerAddress"
                  title="Where we're located"
                  href="https://www.google.com/maps/dir//25.338176,55.4133545/@25.3380298,55.4126638,18z?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  United Arab Emirates,
                  <br />
                  Industrial Area - Al Ghubaiba - Emirate of Sharjah,
                  <br />
                  Near Royal Furniture Showroom
                </a>
              </li>
              <li id="businessTiming">
                <i className="fa-solid fa-clock"></i>
                <p>
                  Monday - Sunday : 9am - 9pm <br />
                  Friday : Closed <br />
                </p>
              </li>
            </ul>
          </address>
        </section>
        <section className="social-links">
          <h2 className="gold-color">Check us out</h2>
          <ul>
            <li>
              <i className="fa-brands fa-instagram"></i>
              <a
                title="Look at our projects"
                href="https://www.instagram.com/taer_al_nawras_sign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                {"@taer_al_nawras_sign"}
              </a>
            </li>
            <li>
              <i className="fa-brands fa-facebook-f"></i>
              <a
                title="not available"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"In progress"}
              </a>
            </li>
            <li>
              <i className="fa-brands fa-x-twitter"></i>
              <a
                title="not available"
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"In progress"}
              </a>
            </li>
            <li>
              <i className="fa-brands fa-linkedin-in"></i>
              <a
                title="not available"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"In progress"}
              </a>
            </li>
          </ul>
        </section>
        <Map />
      </footer>
    </div>
  );
}

function Map() {
  return (
    <iframe
      title="Taer Al-Nawras address"
      aria-label="Taer Al-Nawras address"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7211.726709837099!2d55.40776094476485!3d25.342365928002973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5967e6680643%3A0x8fdbea75fd8b77e9!2sHalab%20Auto%20Exhaust%20%26%20Radiator%20Repair%20Workshop!5e0!3m2!1sen!2s!4v1709523258371!5m2!1sen!2s"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
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
