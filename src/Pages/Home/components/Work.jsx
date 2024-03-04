import "./Styles/Work.scss";
import Carousel from "../../../Components/Carousel/carousel.jsx";
import useImage from "../../../Components/Hooks/useImage.jsx";
import { useCallback } from "react";

export default function Work() {
  const switches = useCallback((format, index) => {
    switch (format) {
      case "png":
        return import(`../assets/Services${index}.png`);
      case "jpg":
        return import(`../assets/Services${index}.jpg`);
      case "webp":
        return import(`../assets/Services${index}.webp`);
      default:
        return new Promise((resolve, reject) => {
          if (index < -1) {
            resolve(format);
          }
          reject(format);
        });
    }
  }, []);

  const images = useImage(switches, 6, ["jpg", "webp", "png"]);
  return (
    <div className="bg-wrapper bg-grayscales-fixed">
      <section id="work">
        <h1>{"YOUR TRUST IN US"}</h1>
        <Carousel images={images} interval={5000} />
      </section>
    </div>
  );
}
