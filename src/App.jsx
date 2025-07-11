import { Outlet, NavLink, ScrollRestoration } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar.jsx";
import Footer from "./Components/Footer/footer.jsx";
import Form from "./Components/Form/form.jsx";
import Button from "./Components/Button/button.jsx";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useEffect, createContext } from "react";

export const GContext = createContext();

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 750);

    return () => {
      clearTimeout(id);
    };
  }, []);

  function setDisplay() {
    document.getElementById("initial-loader").style.display = "none";
  }

  useEffect(() => {
    if (loaded) {
      const loaderSvg = document.querySelector("#initial-loader-svg");
      loaderSvg.style.width = "7.5rem";
      const loader = document.getElementById("initial-loader");
      loader.style.animationPlayState = "running";

      const targetElement = document.querySelector("nav ul svg");
      const targetRect = targetElement.getBoundingClientRect();

      const translateX =
        targetRect.left - loaderSvg.getBoundingClientRect().left;
      const translateY = targetRect.top - loaderSvg.getBoundingClientRect().top;

      loaderSvg.style.transform = `translate(calc(${translateX}px - 3.75rem), calc(${translateY}px - 3.75rem))`;
      const timeoutId = setTimeout(() => {
        setDisplay();
      }, 790);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [loaded]);

  const controls = useDisclosure();

  return (
    <GContext.Provider
      value={{
        loaded: loaded,
        openModal: controls.onOpen,
        setLoaded: setLoaded,
      }}
    >
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
            title={"Dial +971553677009"}
            onClick={() => {
              window.location.href = "tel:+971553677009";
            }}
          >
            {"Contact us"}
          </Button>,
        ]}
      />
      <ScrollRestoration
        getKey={(location) => {
          const paths = ["/", "/about", "/services"];
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
