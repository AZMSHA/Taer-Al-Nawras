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
      altText: "Outdoor signage",
      heading: "Enhance Your Outdoor Presence with Taer Al-Nawras Advertising",
      serviceID: "outdoor+signage",
      p: '"Dive into the World of Outdoor Branding Excellence", Discover the unparalleled impact of outdoor branding with Taer Al-Nawras Advertising! Our expertise lies in creating captivating outdoor signage that not only grabs attention but also adheres to regulatory standards. From conceptualization to compliance, rely on us to elevate your brand visibility effortlessly. Step into the realm of impactful outdoor advertising with Taer Al-Nawras Advertising today!',
    },
    {
      altText: "Indoor Signage",
      heading:
        "Unleash Your Brand's Potential Indoors with Taer Al-Nawras Advertising",
      serviceID: "indoor+signage",
      p: '"Indoor Branding Reinvented", Experience the art of indoor branding with Taer Al-Nawras Advertising! Our mastery in creating captivating indoor signage ensures your brand stands out in any environment. From cutting-edge designs to meticulous adherence to guidelines, rely on us to elevate your indoor brand presence effortlessly. Step into a realm of impactful indoor advertising with Taer Al-Nawras Advertising today!',
    },
    {
      altText: "Digital Signage",
      heading:
        "Unlocking Digital Ingenuity: Taer Al-Nawras Advertising's Digital Display Solutions",
      serviceID: "digital+signage",
      p: '"Dive into the Future of Visual Experiences", Embark on a journey into innovation with Taer Al-Nawras Advertising Digital Display Solutions. We specialize in creating mesmerizing digital experiences that redefine visual landscapes in every setting. From avant-garde designs to effortless compliance with standards, rely on us to revolutionize your digital display needs. Explore the epitome of visual communication with Taer Al-Nawras Advertising today!',
    },
    {
      altText: "Neon Signs",
      heading:
        "Step into the luminous realm of Taer Al-Nawras, where neon dreams come to life!",
      serviceID: "neon+signs",
      p: "Our neon signs are not just lights; they’re beacons of brilliance that transform any space into a spectacle of shimmering splendor. With designs that defy the ordinary and a commitment to excellence, we’re not just meeting standards—we’re setting them. Let Taer Al-Nawras lead you into an effervescent world of neon enchantment tonight!",
    },
    {
      altText: "AMC and Servicing",
      serviceID: "amc+service",
      articles: [
        {
          heading:
            "Enduring Excellence: Taer Al-Nawras’ Commitment to Signage Sustainability",
          p: "Investing in Taer Al-Nawras’ signage is more than a purchase—it’s a promise of enduring excellence. Our Annual Maintenance Contract (AMC) and comprehensive service solutions are designed to extend the life of your investment, ensuring that every sign, whether it’s a modest storefront or a grand marquee, continues to shine with potential. Indoors, our signs stand resilient, but they still require tender love and care to maintain their allure. A regular touch-up keeps them as fresh as your first day of business. Outdoors, our signs brave the elements, standing tall against the sun, rain, and smog. We recommend a gentle, top-to-bottom hand wash to keep them gleaming. Remember, the state of your sign reflects the heart of your brand, and with Taer Al-Nawras, that heart never fades.",
        },
        {
          heading:
            "Uninterrupted Brilliance: Taer Al-Nawras’ Seamless Service Experience",
          p: "With Taer Al-Nawras, your signage experience is uninterrupted brilliance. Our AMC and service solutions are the guardians of your visual identity, ensuring that every neon glow, every LED twinkle remains as captivating as intended. Our commitment goes beyond maintenance; we’re here to enhance and preserve the seamless operation of your displays. Trust in Taer Al-Nawras to deliver not just service, but an experience that keeps your brand’s image immaculate and inviting. Embrace the peace of mind that comes with our expert care and step into a future where your signs never dim.",
        },
      ],
    },
    {
      altText: "Wayfinding",
      heading: "Streamlined Direction: Taer Al-Nawras’ Mastery in Wayfinding",
      serviceID: "wayfinding",
      p: "Discover the art of seamless navigation with Bushrat Hussain Advertising’s Wayfinding Solutions. We specialize in creating intuitive directional signs that guide and enhance the overall experience within any space. From modern designs to compliance with guidelines, trust us to redefine wayfinding effortlessly. Explore effective wayfinding solutions with Bushrat Hussain Advertising today!",
    },
  ];

  const articleData = data.filter((set) => set.serviceID == ID)[0];
  return (
    <main className="bg-gold-gradient-fixed" {...props}>
      <div className="bg-wrapper">
        <section id="services">
          <h1>{"HOW WE HELP"}</h1>
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
