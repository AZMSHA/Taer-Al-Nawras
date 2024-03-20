import "./Styles/service.scss";
import useImageSrc from "../../../Components/Hooks/useImageSrc.jsx";
import { useOutletContext } from "react-router-dom";
import Carousel from "../../../Components/Carousel/carousel.jsx";
import ImageCount from "/ImageCount.js?url";
import { useMemo } from "react";
export default function Service() {
  const Context = useOutletContext();
  const srcChooser = () => {
    switch (Context.ID) {
      case "outdoor+signage":
        return {
          src: "/assets/services/outdoorSignage/outdoorSignage",
          count: ImageCount.outdoorSignage,
        };
      case "indoor+signage":
        return {
          src: "/assets/services/indoorSignage/indoorSignage",
          count: ImageCount.indoorSignage,
        };
      case "digital+signage":
        return {
          src: "/assets/services/digitalSignage/digitalSignage",
          count: ImageCount.digitalSignage,
        };
      case "neon+signs":
        return {
          src: "/assets/services/neonSigns/neonSigns",
          count: ImageCount.neonSigns,
        };
      case "amc+service":
        return {
          src: "/assets/services/amcService/amcService",
          count: ImageCount.amcService,
        };
      case "wayfinding":
        return {
          src: "/assets/services/wayfinding/wayfinding",
          count: ImageCount.wayfinding,
        };

      default:
        return;
    }
  };
  const src = useMemo(() => srcChooser(), [Context.ID]);
  const images = useImageSrc(src.src, src.count, "jpg");

  return (
    <section id="serviceDetails">
      <article id="service">
        <img
          onError={(e) => (e.target.src = "./placeholder.webp")}
          loading="lazy"
          src={images[0]}
          alt={Context.altText + "header image"}
        />
        {Context.heading ? (
          <>
            <h2>{Context.heading}</h2>
            <p>{Context.p}</p>
          </>
        ) : (
          <>
            {Context.articles.map(({ heading, p }) => (
              <div key={heading}>
                <h2>{heading}</h2>
                <p>{p}</p>
              </div>
            ))}
          </>
        )}
      </article>
      <Carousel interval={2000} images={images} />
    </section>
  );
}
