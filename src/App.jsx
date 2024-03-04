import { Outlet, NavLink, ScrollRestoration } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar.jsx";
import Footer from "./Components/Footer/footer.jsx";
import Form from "./Components/Form/Form.jsx";
import Button from "./Components/Button/button.jsx";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useEffect, createContext } from "react";

export const GContext = createContext();

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("load", function () {
      setLoaded(true);
    });

    return () => {
      window.removeEventListener("load", function () {
        setLoaded(true);
      });
    };
  }, []);

  useEffect(() => {
    if (loaded) {
      const loaderSvg = document.querySelector("#initial-loader svg");
      loaderSvg.style.width = "7.5rem";
      const loader = document.getElementById("initial-loader");
      loader.style.animationPlayState = "running";

      const targetElement = document.querySelector("nav ul svg");
      const targetRect = targetElement.getBoundingClientRect();

      const translateX =
        targetRect.left - loaderSvg.getBoundingClientRect().left;
      const translateY = targetRect.top - loaderSvg.getBoundingClientRect().top;

      loaderSvg.style.transform = `translate(calc(${translateX}px - 3.75rem), calc(${translateY}px - 3.75rem))`;
    }
  }, [loaded]);

  const controls = useDisclosure();

  return (
    <GContext.Provider value={{ loaded: loaded, openModal: controls.onOpen }}>
      <Navbar
        links={[
          <NavLink key={"home"} to={"/"}>
            {"Home"}
          </NavLink>,
          <NavLink key={"about-us"} to={"/about"}>
            {"About us"}
          </NavLink>,
          <NavLink key={"services"} to={`/services/outdoor+signage`}>
            {"Services"}
          </NavLink>,
          <Button
            aria-label={"Contact us"}
            key={"contact-us"}
            Class={"btn-pri"}
            title={"Dial +971509055365"}
            onClick={() => {
              window.location.href = "tel:+971509055365";
            }}
          >
            {"Contact us"}
          </Button>,
        ]}
      />
      <ScrollRestoration
        getKey={(location) => {
          const paths = ["/", "/about", "services"];
          return paths.includes(location.pathname)
            ? // home and notifications restore by pathname
              location.pathname
            : // everything else by location like the browser
              location.key;
        }}
      />
      <Outlet />
      <Footer />

      <Form {...controls} />
    </GContext.Provider>
  );
}

export default App;
