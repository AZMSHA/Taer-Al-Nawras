import { Outlet, Link } from "react-router-dom";
import "./services.scss";

export default function Services(props) {
  const links = [
    { linkName: "Outdoor Signage", serviceID: "outdoor+signage" },
    { linkName: "Indoor Signage", serviceID: "indoor+signage" },
    { linkName: "Digtal Signage", serviceID: "digtal+signage" },
    { linkName: "Neon Signs", serviceID: "neon+signs" },
    { linkName: "AMC / Service", serviceID: "amc+Service" },
    { linkName: "Wayfinding", serviceID: "wayfinding" },
  ];
  return (
    <main {...props}>
      <div className="bg-wrapper">
        <section id="services">
          <h1>OUR SERVICES</h1>
          <menu>
            {links.map((link) => {
              return (
                <li key={link.serviceID}>
                  {
                    <Link to={`/services/${link.serviceID}`}>
                      {link.linkName}
                    </Link>
                  }
                </li>
              );
            })}
          </menu>
          <div className="detailsPage">
            <Outlet />
          </div>
        </section>
      </div>
    </main>
  );
}
