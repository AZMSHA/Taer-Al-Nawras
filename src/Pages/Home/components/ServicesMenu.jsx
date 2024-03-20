import Button from "../../../Components/Button/button";
import useImageSrc from "../../../Components/Hooks/useImageSrc";
import { Link, useNavigate } from "react-router-dom";
import "./Styles/ServicesMenu.scss";
import { useEffect } from "react";

export default function ServicesMenu() {
  const Navigation = useNavigate();

  const images = useImageSrc("/assets/home/serviceMenu/serviceMenu", 6, "jpg");

  const data = {
    set1: [
      { linkName: "Outdoor Signage", serviceID: "outdoor+signage" },
      "Make a bold statement with vibrant outdoor displays",
      "Experience stunning LED signs that shine day and night",
      "Engage your audience with dynamic outdoor signage",
      "Discover standout solutions for your outdoor branding",
      "Ensure your message is seen around the clock",
    ],

    set2: [
      { linkName: "Digital Signage", serviceID: "digital+signage" },
      "Create cutting-edge digital experiences for your audience",
      "Transform spaces with visually striking digital displays",
      "Stand out with unmatched digital signage solutions",
      "Explore a world of seamless digital experiences",
      "Deliver captivating content effortlessly",
    ],

    set3: [
      { linkName: "Indoor Signage", serviceID: "indoor+signage" },
      "Illuminate indoor spaces with captivating signage",
      "Guide visitors with dynamic indoor sign solutions",
      "Discover standout solutions for indoor branding",
      "Create lasting impressions with indoor signs",
      "Make your indoor spaces shine with brilliance",
    ],

    set4: [
      { linkName: "Wayfinding", serviceID: "wayfinding" },
      "Create intuitive designs for effortless navigation",
      "Guide visitors seamlessly with dynamic solutions",
      "Enhance navigation with directional clarity",
      "Make getting around easy and intuitive",
      "Stand out with distinctive wayfinding signs",
    ],

    set5: [
      { linkName: "Neon Signs", serviceID: "neon+signs" },
      "Experience captivating nights with neon signs",
      "Illuminate your space with radiant neon solutions",
      "Embrace the timeless glow of neon lighting",
      "Discover seamless brilliance with neon signs",
      "Make a statement with standout neon signage",
    ],

    set6: [
      { linkName: "AMC / Service", serviceID: "amc+service" },
      "Enjoy worry-free maintenance with comprehensive solutions",
      "Experience seamless care with innovative services",
      "Ensure your business runs smoothly with AMC",
      "Explore unmatched maintenance services",
      "Innovate with comprehensive maintenance solutions",
    ],
  };

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the class when the element is in the viewport
          entry.target.classList.add("animate");
        } else {
          // Remove the class when the element is not in the viewport
          entry.target.classList.remove("animate");
        }
      });
    }, options);

    const elements = document.querySelectorAll(".serviceMenu-section");
    elements.forEach((element) => observer.observe(element));

    // Cleanup function
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

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
              <section className="serviceMenu-section">
                <img
                  onError={(e) => (e.target.src = "./placeholder.webp")}
                  loading="lazy"
                  src={images[index]}
                  alt={data[dataSet][0].linkName + " backdrop image"}
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
            onClick={() => Navigation(`/services/outdoor+signage`)}
            Class={"btn-pri-w"}
          >
            Learn more
          </Button>
        </div>
      </section>
    </>
  );
}
