import "./Styles/Work.scss";
import Carousel from "../../../Components/Carousel/carousel.jsx";
import useImages from "../../../Components/Hooks/useImageMultipleSrc";
import ImageCount from "/ImageCount.js?url";
import { useMemo } from "react";

export default function Work() {
  const sources = useMemo(() => {
    return [
      {
        src: "/assets/home/work/work",
        count: ImageCount.work,
        format: "jpg",
      },
      {
        src: "/assets/services/outdoorSignage/outdoorSignage",
        count: ImageCount.outdoorSignage,
        format: "jpg",
      },
      {
        src: "/assets/services/indoorSignage/indoorSignage",
        count: ImageCount.indoorSignage,
        format: "jpg",
      },
      {
        src: "/assets/services/digitalSignage/digitalSignage",
        count: ImageCount.digitalSignage,
        format: "jpg",
      },
      {
        src: "/assets/services/neonSigns/neonSigns",
        count: ImageCount.neonSigns,
        format: "jpg",
      },
      {
        src: "/assets/services/amcService/amcService",
        count: ImageCount.amcService,
        format: "jpg",
      },
      {
        src: "/assets/services/wayfinding/wayfinding",
        count: ImageCount.wayfinding,
        format: "jpg",
      },
    ];
  }, []);
  const images = useImages(sources);

  return (
    <div className="bg-wrapper bg-grayscales-fixed">
      <section id="work">
        <h1>{"YOUR TRUST IN US"}</h1>
        <Carousel images={images} interval={2000} />
      </section>
    </div>
  );
}
