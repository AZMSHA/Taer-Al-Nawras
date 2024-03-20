import "./Styles/Hero.scss";
import Images from "../../../Components/Modules/Images";

import { GContext } from "../../../App";
import { useContext } from "react";

function Hero() {
  const loaded = useContext(GContext).loaded;
  const animate = { animationPlayState: loaded ? "running" : "paused" };

  return (
    <section id="hero">
      <div className="hero-grid">
        <Images
          alt={"Image of Taer Al-Nawras' project"}
          imageData={{
            source: "/assets/home/hero/hero",
            count: 6,
            formats: "jpg",
          }}
          set={0}
          style={animate}
          onError={(e) => (e.target.src = "./placeholder.webp")}
        />
        <h1 style={animate} className="neon">
          <span className="letter" style={animate}>
            T
          </span>
          <span className="letter" style={animate}>
            aer
          </span>{" "}
          <span className="letter" style={animate}>
            Al
          </span>
          <span className="letter" style={animate}>
            -
          </span>
          <span className="letter" style={animate}>
            Nawras
          </span>{" "}
          <span className="letter" style={animate}>
            S
          </span>
          <span className="letter" style={animate}>
            ig
          </span>
          <span className="letter" style={animate}>
            nage
          </span>
        </h1>
        <p
          className="neon-p swim"
          style={{ ...animate, animationDelay: "300ms" }}
        >
          Expose your brand to larger audiences with Taer Al-Nawras and reach
          heights that have never been reached before.
        </p>
      </div>
    </section>
  );
}

export default Hero;
