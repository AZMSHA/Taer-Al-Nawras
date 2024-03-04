import "./Styles/service.scss";
import useImage from "../../../Components/Hooks/useImage.jsx";
import { useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import Carousel from "../../../Components/Carousel/carousel.jsx";

export default function Service() {
  const Context = useOutletContext();
  const outdoorSignangeImages = (format, index) => {
    switch (format) {
      case "jpeg":
        return import(`./assets/outdoor+signage (${index}).jpeg`);
      case "jpg":
        return import(`./assets/outdoor+signage (${index}).jpg`);

      default:
        return new Promise((resolve, reject) => {
          if (index < -1) {
            resolve(format);
          }
          reject(format);
        });
    }
  };

  const indoorSignageImages = (format, index) => {
    switch (format) {
      case "jpeg":
        return import(`./assets/indoor+signage (${index}).jpeg`);
      case "jpg":
        return import(`./assets/indoor+signage (${index}).jpg`);

      default:
        return new Promise((resolve, reject) => {
          if (index < -1) {
            resolve(format);
          }
          reject(format);
        });
    }
  };

  const digitalSignageImages = (format, index) => {
    switch (format) {
      case "jpeg":
        return import(`./assets/digital-signage (${index}).jpeg`);
      case "jpg":
        return import(`./assets/digital-signage (${index}).jpg`);

      default:
        return new Promise((resolve, reject) => {
          if (index < -1) {
            resolve(format);
          }
          reject(format);
        });
    }
  };

  const neonSignsImages = (format, index) => {
    switch (format) {
      case "jpeg":
        return import(`./assets/neon+signs (${index}).jpeg`);
      case "jpg":
        return import(`./assets/neon+signs (${index}).jpg`);

      default:
        return new Promise((resolve, reject) => {
          if (index < -1) {
            resolve(format);
          }
          reject(format);
        });
    }
  };

  const amcServicesImages = (format, index) => {
    switch (format) {
      case "jpeg":
        return import(`./assets/amc+service (${index}).jpeg`);
      case "jpg":
        return import(`./assets/amc+service (${index}).jpg`);

      default:
        return new Promise((resolve, reject) => {
          if (index < -1) {
            resolve(format);
          }
          reject(format);
        });
    }
  };

  const wayfindingImages = (format, index) => {
    switch (format) {
      case "jpeg":
        return import(`./assets/wayfinding (${index}).jpeg`);
      case "jpg":
        return import(`./assets/wayfinding (${index}).jpg`);
      default:
        return new Promise((resolve, reject) => {
          if (index < -1) {
            resolve(format);
          }
          reject(format);
        });
    }
  };

  const switches = useMemo(() => {
    return Context.ID === "outdoor+signage"
      ? outdoorSignangeImages
      : Context.ID === "indoor+signage"
      ? indoorSignageImages
      : Context.ID === "digital+signage"
      ? digitalSignageImages
      : Context.ID === "neon+signs"
      ? neonSignsImages
      : Context.ID === "amc+service"
      ? amcServicesImages
      : Context.ID === "wayfinding"
      ? wayfindingImages
      : outdoorSignangeImages;
  }, [Context.ID]);
  const images = useImage(switches, 41, ["jpg", "jpeg"]);
  console.log(Context.heading);

  return (
    <section id="serviceDetails">
      <article id="service">
        <img
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
      <Carousel interval={10000} images={images} />
    </section>
  );
}
