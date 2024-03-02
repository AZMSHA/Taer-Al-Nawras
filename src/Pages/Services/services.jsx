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
          <nav>
            <ul>
              {links.map((link) => {
                return (
                  <Link key={link.serviceID} to={`/services/${link.serviceID}`}>
                    <li>{link.linkName}</li>
                    <i className="fa-solid fa-caret-right"></i>
                  </Link>
                );
              })}
            </ul>
          </nav>
          <div className="detailsPage">
            <Outlet />
          </div>
        </section>
      </div>
    </main>
  );
}
