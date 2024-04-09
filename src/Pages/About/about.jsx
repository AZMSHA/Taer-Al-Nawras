import "./about.scss";
import useImagePromise from "../../Components/Hooks/useImage";
import useFetchImages from "../../Components/Hooks/useFetchImages";
import { useCallback, useRef, useEffect, useState, useMemo } from "react";

export default function About(props) {
  const switches = useCallback((format, index) => {
    switch (format) {
      case "jpeg":
        return import(`./assets/about${index}.jpeg`);
      case "jpg":
        return import(`./assets/about${index}.jpg`);
      default:
        return new Promise((resolve, reject) => {
          if (index < -1) {
            resolve(format);
          }
          reject(format);
        });
    }
  }, []);

  const pathArr = useMemo(() => ["/assets/home/hero/", "/assets/about"], []);
  const imag = useFetchImages(pathArr);
  console.log(imag);

  const images = useImagePromise(switches, 5, ["jpg", "jpeg"]);
  const [visible1, setIsVisible1] = useState(false);
  const [visible2, setIsVisible2] = useState(false);

  const element1Ref = useRef(null);
  const element2Ref = useRef(null);

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.75,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === "about-section1") {
          setIsVisible1(!visible1);
          observer.unobserve(entry.target);
        } else if (entry.isIntersecting) {
          setIsVisible2(!visible2);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(element1Ref.current);
    observer.observe(element2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="bg-wrapper"
      style={{
        backgroundImage: `url(${images[4]})`,
        backgroundAttachment: "fixed",
      }}
    >
      <section {...props} id="about">
        <header>
          <h1>About Taer Al-Nawras Advertising</h1>
          <p>
            Crafting Memorable Impressions Through Innovative Signage Solutions.
            At Taer Al-Nawras Advertising, we are dedicated to revolutionizing
            the professional signage industry with our wealth of experience and
            commitment to excellence. As a leading signage company serving
            Dubai, Sharjah, and the UAE, we have garnered acclaim for our
            exceptional work and unwavering dedication to our clients.
          </p>
        </header>
        <div id="about-grid">
          <section id="about-section1" ref={element1Ref}>
            <div
              style={{ animationPlayState: visible1 ? "running" : "paused" }}
              className="aboutImages"
            >
              <img
                onError={(e) => (e.target.src = "./placeholder.webp")}
                loading="lazy"
                style={{ animationPlayState: visible1 ? "running" : "paused" }}
                src={images[0]}
                alt="About us section images"
              />
              <img
                onError={(e) => (e.target.src = "./placeholder.webp")}
                loading="lazy"
                style={{ animationPlayState: visible1 ? "running" : "paused" }}
                src={images[1]}
                alt="About us section images"
              />
            </div>
            <article>
              <h2
                style={{ animationPlayState: visible1 ? "running" : "paused" }}
              >
                Our Expertise: Leading the Way in Signage Solutions
              </h2>
              <p
                style={{ animationPlayState: visible1 ? "running" : "paused" }}
              >
                With a team of highly skilled professionals and state-of-the-art
                equipment, we lead the industry in designing, fabricating, and
                installing cutting-edge signage solutions. From eye-catching
                displays to intricate multimedia screen installations, we offer
                comprehensive services tailored to organizations of all sizes.
                Whether you&apos;re a startup or a multinational corporation,
                our top-tier hoarding solutions are designed to elevate your
                brand and drive increased foot traffic.
              </p>
            </article>
          </section>
          <section id="about-section2" ref={element2Ref}>
            <article>
              <h2
                style={{ animationPlayState: visible2 ? "running" : "paused" }}
              >
                Our Promise: Elevating Your Brand Through Creativity and
                Precision
              </h2>
              <p
                style={{ animationPlayState: visible2 ? "running" : "paused" }}
              >
                At Taer Al-Nawras Advertising, we understand the importance of
                creating a lasting impression. Our creative team is committed to
                helping you showcase your business in the most innovative and
                cost-effective manner possible. Whether it&apos;s crafting
                captivating signage or transforming your office space, we
                combine meticulous attention to detail with a touch of
                creativity to captivate your audience and drive results.
              </p>
            </article>
            <div
              style={{ animationPlayState: visible2 ? "running" : "paused" }}
              className="aboutImages"
            >
              <img
                onError={(e) => (e.target.src = "./placeholder.webp")}
                loading="lazy"
                style={{ animationPlayState: visible2 ? "running" : "paused" }}
                src={images[2]}
                alt="About us section images"
              />
              <img
                onError={(e) => (e.target.src = "./placeholder.webp")}
                loading="lazy"
                style={{ animationPlayState: visible2 ? "running" : "paused" }}
                src={images[3]}
                alt="About us section images"
              />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
