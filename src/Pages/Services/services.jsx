import { Outlet, NavLink, useParams } from "react-router-dom";
import "./services.scss";

export default function Services(props) {
  const ID = useParams().serviceID;
  const links = [
    { linkName: "Outdoor Signage", serviceID: "outdoor+signage" },
    { linkName: "Indoor Signage", serviceID: "indoor+signage" },
    { linkName: "Digital Signage", serviceID: "digital+signage" },
    { linkName: "Neon Signs", serviceID: "neon+signs" },
    { linkName: "AMC / Service", serviceID: "amc+service" },
    { linkName: "Wayfinding", serviceID: "wayfinding" },
  ];

  const data = [
    {
      heading: "Outdoor Signage",
      serviceID: "outdoor+signage",
      p: "Unveil the power of outdoor branding with Bushrat Hussain Advertising! We specialize in crafting eye-catching outdoor signage that not only captivates attention but also complies with government guidelines. From design to compliance, trust us to amplify your brand presence seamlessly. Explore the world of impactful outdoor advertising with Bushrat Hussain Advertising today! 🌟",
    },
    {
      heading: "Indoor Signage",
      serviceID: "indoor+signage",
      p: "Unveil the power of outdoor branding with Bushrat Hussain Advertising! We specialize in crafting eye-catching outdoor signage that not only captivates attention but also complies with government guidelines. From design to compliance, trust us to amplify your brand presence seamlessly. Explore the world of impactful outdoor advertising with Bushrat Hussain Advertising today! 🌟",
    },
    {
      heading: "Digital Signage",
      serviceID: "digital+signage",
      p: "Unveil the power of outdoor branding with Bushrat Hussain Advertising! We specialize in crafting eye-catching outdoor signage that not only captivates attention but also complies with government guidelines. From design to compliance, trust us to amplify your brand presence seamlessly. Explore the world of impactful outdoor advertising with Bushrat Hussain Advertising today! 🌟",
    },
    {
      heading: "Neon Signs",
      serviceID: "neon+signs",
      p: "Unveil the power of outdoor branding with Bushrat Hussain Advertising! We specialize in crafting eye-catching outdoor signage that not only captivates attention but also complies with government guidelines. From design to compliance, trust us to amplify your brand presence seamlessly. Explore the world of impactful outdoor advertising with Bushrat Hussain Advertising today! 🌟",
    },
    {
      heading: "AMC / Service",
      serviceID: "amc+service",
      p: "Unveil the power of outdoor branding with Bushrat Hussain Advertising! We specialize in crafting eye-catching outdoor signage that not only captivates attention but also complies with government guidelines. From design to compliance, trust us to amplify your brand presence seamlessly. Explore the world of impactful outdoor advertising with Bushrat Hussain Advertising today! 🌟",
    },
    {
      heading: "Wayfinding",
      serviceID: "wayfinding",
      p: "Unveil the power of outdoor branding with Bushrat Hussain Advertising! We specialize in crafting eye-catching outdoor signage that not only captivates attention but also complies with government guidelines. From design to compliance, trust us to amplify your brand presence seamlessly. Explore the world of impactful outdoor advertising with Bushrat Hussain Advertising today! 🌟",
    },
  ];

  const articleData = data.filter((set) => set.serviceID == ID)[0];
  return (
    <main {...props}>
      <div className="bg-wrapper">
        <section id="services">
          <h1>{"HOW CAN WE HELP?"}</h1>
          <nav>
            <ul>
              {links.map((link) => {
                return (
                  <NavLink
                    className={"bg-BW"}
                    key={link.serviceID}
                    to={`/services/${link.serviceID}`}
                  >
                    <li>{link.linkName}</li>
                    <i className="fa-solid fa-caret-right"></i>
                  </NavLink>
                );
              })}
            </ul>
          </nav>
          <div className="detailsPage">
            <Outlet context={{ ...articleData, ID }} />
          </div>
        </section>
      </div>
    </main>
  );
}
