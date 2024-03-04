import "./about.scss";
import useImagePromise from "../../Components/Hooks/useImage";
import { useCallback, useRef, useEffect, useState } from "react";

export default function About(props) {
  const switches = useCallback((format, index) => {
    switch (format) {
      case "jpeg":
        if (index === 5) {
          return import(`./assets/hashtagCropped.jpeg`);
        }
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
        <h1>ABOUT US</h1>
        <div id="about-grid">
          <section id="about-section1" ref={element1Ref}>
            <div
              style={{ animationPlayState: visible1 ? "running" : "paused" }}
              className="aboutImages"
            >
              <img
                loading="lazy"
                style={{ animationPlayState: visible1 ? "running" : "paused" }}
                src={images[0]}
                alt="About us section images"
              />
              <img
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
                Heading 1 depicting motivations of the company
              </h2>
              <p
                style={{ animationPlayState: visible1 ? "running" : "paused" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis ratione ducimus fugit dolor, nemo excepturi nobis unde
                debitis nihil nesciunt minus doloremque! Repellendus, ab. Magni
                necessitatibus animi est dolorem assumenda delectus facilis
                pariatur, corrupti expedita ex minima, blanditiis, aspernatur
                sunt neque! Blanditiis facilis rerum veniam? Nemo corrupti sit
                possimus, deserunt, quidem veniam corporis enim totam obcaecati,
                fuga modi et quaerat exercitationem nihil maiores debitis quae.
                Similique doloremque, nobis, odit laboriosam sit, nam nostrum
                exercitationem eaque laudantium libero recusandae alias at
                facilis veniam sint assumenda. Quae quia consectetur labore
                pariatur ratione, doloremque, recusandae iure voluptas possimus
                nemo accusantium modi dolorem repellat? corrupti!
              </p>
            </article>
          </section>
          <section id="about-section2" ref={element2Ref}>
            <article>
              <h2
                style={{ animationPlayState: visible2 ? "running" : "paused" }}
              >
                Header 2 to show your professionalism and sell yours
                skills/product
              </h2>
              <p
                style={{ animationPlayState: visible2 ? "running" : "paused" }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto sit excepturi quaerat rem aut, expedita obcaecati
                iste deleniti quas sequi doloremque asperiores ipsa quibusdam
                minus odio ullam corrupti consectetur nostrum? Veritatis facere
                at officiis dolores, enim cupiditate voluptatibus ipsum iusto
                nobis quidem optio atque repellendus odit, tempora, expedita
                laudantium fuga modi maiores. Incidunt officiis voluptatum nobis
                voluptatibus assumenda rerum explicabo officia animi aliquam,
                quis, minima labore sequi quo. Ipsa porro omnis earum
                reiciendis, corrupti maiores inventore, quam deserunt cumque
                sequi ipsum. Dolorem numquam autem at dignissimos ad minus
                inventore unde vitae rerum quam, animi nihil placeat iure sit
                debitis! Suscipit!
              </p>
            </article>
            <div
              style={{ animationPlayState: visible2 ? "running" : "paused" }}
              className="aboutImages"
            >
              <img
                loading="lazy"
                style={{ animationPlayState: visible2 ? "running" : "paused" }}
                src={images[2]}
                alt="About us section images"
              />
              <img
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
