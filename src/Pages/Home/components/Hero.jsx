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
          imageData={{
            switches: (format, index) => {
              switch (format) {
                case "png":
                  return import(`../assets/imageGrid${index}.png`);
                case "jpg":
                  return import(`../assets/imageGrid${index}.jpg`);
                case "webp":
                  return import(`../assets/imageGrid${index}.webp`);
                case "svg":
                  return import(`../assets/imageGrid${index}.svg`);
                default:
                  return new Promise((resolve, reject) => {
                    if (index < -1) {
                      resolve(format);
                    }
                    reject(format);
                  });
              }
            },
            count: 6,
            formats: ["jpg", "png", "webp", "svg"],
          }}
          set={0}
          style={animate}
        />
        <h1 className="neon">Taer Al-Nawras Signage</h1>
        <p
          className="neon-p swim"
          style={{ ...animate, animationDelay: "300ms" }}
        >
          Start your journey to success with the Taer Al-Nawras signage company,
          and together, we&apos;ll compose a narrative of achievement.
        </p>
      </div>
    </section>
  );
}

export default Hero;
