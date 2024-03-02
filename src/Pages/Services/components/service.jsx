import "./Styles/service.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useImage from "../../../Components/Hooks/useImage.jsx";

export default function Service() {
  const ID = useParams().serviceID;
  const switches = (format, index) => {
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
  const images = useImage(switches, 6, ["jpg", "png", "webp"]);
  const data = [
    {
      image: "",
      heading: "Outdoor Signage",
      serviceID: "outdoor+signage",
      p: "Unveil the power of outdoor branding with Bushrat Hussain Advertising! We specialize in crafting eye-catching outdoor signage that not only captivates attention but also complies with government guidelines. From design to compliance, trust us to amplify your brand presence seamlessly. Explore the world of impactful outdoor advertising with Bushrat Hussain Advertising today! 🌟",
    },
    {
      image: "",
      heading: "Indoor Signage",
      serviceID: "indoor+signage",
      p: "Unveil the power of outdoor branding with Bushrat Hussain Advertising! We specialize in crafting eye-catching outdoor signage that not only captivates attention but also complies with government guidelines. From design to compliance, trust us to amplify your brand presence seamlessly. Explore the world of impactful outdoor advertising with Bushrat Hussain Advertising today! 🌟",
    },
    {
      image: "",
      heading: "Digtal Signage",
      serviceID: "digtal+signage",
      p: "Unveil the power of outdoor branding with Bushrat Hussain Advertising! We specialize in crafting eye-catching outdoor signage that not only captivates attention but also complies with government guidelines. From design to compliance, trust us to amplify your brand presence seamlessly. Explore the world of impactful outdoor advertising with Bushrat Hussain Advertising today! 🌟",
    },
    {
      image: "",
      heading: "Neon Signs",
      serviceID: "neon+signs",
      p: "Unveil the power of outdoor branding with Bushrat Hussain Advertising! We specialize in crafting eye-catching outdoor signage that not only captivates attention but also complies with government guidelines. From design to compliance, trust us to amplify your brand presence seamlessly. Explore the world of impactful outdoor advertising with Bushrat Hussain Advertising today! 🌟",
    },
    {
      image: "",
      heading: "AMC / Service",
      serviceID: "amc+Service",
      p: "Unveil the power of outdoor branding with Bushrat Hussain Advertising! We specialize in crafting eye-catching outdoor signage that not only captivates attention but also complies with government guidelines. From design to compliance, trust us to amplify your brand presence seamlessly. Explore the world of impactful outdoor advertising with Bushrat Hussain Advertising today! 🌟",
    },
    {
      image: "",
      heading: "Wayfinding",
      serviceID: "wayfinding",
      p: "Unveil the power of outdoor branding with Bushrat Hussain Advertising! We specialize in crafting eye-catching outdoor signage that not only captivates attention but also complies with government guidelines. From design to compliance, trust us to amplify your brand presence seamlessly. Explore the world of impactful outdoor advertising with Bushrat Hussain Advertising today! 🌟",
    },
  ];
  images.forEach((image, index) => {
    data[index].image = image;
  });
  const articleData = data.filter((set) => set.serviceID == ID)[0];

  return (
    <article id="service">
      <img src={articleData?.image} alt={images[0]} />
      <h2>{articleData?.heading}</h2>
      <p>{articleData?.p}</p>
    </article>
  );
}
