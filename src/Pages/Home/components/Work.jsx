import "./Styles/Work.scss";
import Carousel from "../../../Components/Carousel/carousel.jsx";
import useImage from "../../../Components/Hooks/useImage.jsx";
import { useCallback } from "react";

export default function Work() {
  const switches = useCallback((format, index) => {
    switch (format) {
      case "jpeg":
        return import(`./assets/work (${index}).jpeg`);
      case "jpg":
        return import(`./assets/work (${index}).jpg`);
      default:
        return new Promise((resolve, reject) => {
          if (index < -1) {
            resolve(format);
          }
          reject(format);
        });
    }
  }, []);

  const images = useImage(switches, 100, ["jpg", "jpeg"]);
  return (
    <div className="bg-wrapper bg-grayscales-fixed">
      <section id="work">
        <h1>{"YOUR TRUST IN US"}</h1>
        <Carousel images={images} interval={2000} />
      </section>
    </div>
  );
}
