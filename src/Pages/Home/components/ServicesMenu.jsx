import Button from "../../../Components/Button/button";
import useImagePromise from "../../../Components/Hooks/useImage";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/ServicesMenu.scss";

export default function ServicesMenu() {
  const Navigation = useNavigate();
  const switches = (format, index) => {
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
  };

  const images = useImagePromise(switches, 6, ["jpg", "webp", "png"]);

  const data = {
    set1: [
      { linkName: "Outdoor Signage", serviceID: "outdoor+signage" },
      "Vibrant LED Displays",
      "Day-to-Night Brilliance",
      "Dynamic Outdoor Signage",
      "Standout Signage Solutions",
      "Round-the-Clock Visibility",
    ],

    set2: [
      { linkName: "Digtal Signage", serviceID: "digtal+signage" },
      "Revolutionary Digital Experiences",
      "Transformative Visual Brilliance",
      "Digital Displays That Stand Out",
      "Unmatched Digital Brilliance",
      "Seamless Digital Brilliance",
    ],

    set3: [
      { linkName: "Indoor Signage", serviceID: "indoor+signage" },
      "Captivating Indoor Brilliance",
      "Dynamic Indoor Signage",
      "Standout Indoor Solutions",
      "Illuminating Indoor Impressions",
      "Indoor Signs That Shine",
    ],
    set4: [
      { linkName: "Wayfinding", serviceID: "wayfinding" },
      "Intuitive Wayfinding Designs",
      "Dynamic Wayfinding Solutions",
      "Seamless Directional Brilliance",
      "Effortless Navigation Impressions",
      "Wayfinding Signs That Stand Out",
    ],
    set5: [
      { linkName: "Neon Signs", serviceID: "neon+signs" },
      "Captivating Neon Nights",
      "Radiant Neon Sign Solutions",
      "Timeless Glow of Neon Brilliance",
      "Seamless Neon Brilliance",
      "Neon Signs That Stand Out",
    ],
    set6: [
      { linkName: "AMC / Service", serviceID: "amc+service" },
      "Worry-Free Maintenance Solutions",
      "Seamless Care Brilliance",
      "Comprehensive AMC/Service",
      "Unmatched AMC/Service Brilliance",
      "Innovative Maintenance Solutions",
    ],
  };

  return (
    <>
      <section id="servicesMenu">
        <h1>OUR SERVICES</h1>
        {Object.keys(data).map((dataSet, index) => {
          return (
            <Link
              key={dataSet + index}
              to={`/services/${data[dataSet][0].serviceID}`}
            >
              <section>
                <img
                  src={images[index]}
                  alt={data[dataSet][0] + "backdrop image"}
                />
                <div className="backdrop">
                  <header>
                    <h2 className="gold-color">{data[dataSet][0].linkName}</h2>
                  </header>
                  <ul>
                    {data[dataSet].map((listItem, index1) => {
                      if (index1) {
                        return <li key={listItem + index1}>{listItem}</li>;
                      }
                    })}
                  </ul>
                </div>
              </section>
            </Link>
          );
        })}
        <div className="btn-area">
          <Button
            onClick={() => Navigation(`/services/"outdoor+signage"`)}
            Class={"btn-pri-w"}
          >
            Learn more
          </Button>
        </div>
      </section>
    </>
  );
}
