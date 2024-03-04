import "./Styles/service.scss";
import useImage from "../../../Components/Hooks/useImage.jsx";
import { useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import Carousel from "../../../Components/Carousel/carousel.jsx";

export default function Service() {
  const { heading, p, ID } = useOutletContext();
  const outdoorSignangeImages = (format, index) => {
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
  };

  const indoorSignageImages = (format, index) => {
    switch (format) {
      case "png":
        return import(`../assets/Services${index}.png`);
      case "jpg":
        return import(`../assets/Services${index}.jpg`);
      case "webp":
        return import(`../assets/Services${index}.webp`);
      case "svg":
        return import(`../assets/Services${index}.svg`);
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
      case "png":
        return import(`../assets/pfp${index}.png`);
      case "jpg":
        return import(`../assets/pfp${index}.jpg`);
      case "webp":
        return import(`../assets/pfp${index}.webp`);
      case "svg":
        return import(`../assets/pfp${index}.svg`);
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
  };

  const amcServicesImages = (format, index) => {
    switch (format) {
      case "png":
        return import(`../assets/Services${index}.png`);
      case "jpg":
        return import(`../assets/Services${index}.jpg`);
      case "webp":
        return import(`../assets/Services${index}.webp`);
      case "svg":
        return import(`../assets/Services${index}.svg`);
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
      case "png":
        return import(`../assets/pfp${index}.png`);
      case "jpg":
        return import(`../assets/pfp${index}.jpg`);
      case "webp":
        return import(`../assets/pfp${index}.webp`);
      case "svg":
        return import(`../assets/pfp${index}.svg`);
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
    return ID === "outdoor+signage"
      ? outdoorSignangeImages
      : ID === "indoor+signage"
      ? indoorSignageImages
      : ID === "digital+signage"
      ? digitalSignageImages
      : ID === "neon+signs"
      ? neonSignsImages
      : ID === "amc+service"
      ? amcServicesImages
      : ID === "wayfinding"
      ? wayfindingImages
      : outdoorSignangeImages;
  }, [ID]);
  const images = useImage(switches, 6, ["jpg", "png", "webp"]);

  return (
    <section id="serviceDetails">
      <article id="service">
        <img loading="lazy" src={images[0]} alt={heading + "header image"} />
        <h2>{heading}</h2>
        <p>{p}</p>
      </article>
      <Carousel interval={10000} images={images} />
    </section>
  );
}
