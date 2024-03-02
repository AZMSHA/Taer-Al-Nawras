import { Outlet, Link } from "react-router-dom";
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

  if (loaded) {
    const loaderSvg = document.querySelector("#initial-loader svg");
    loaderSvg.style.width = "9rem";
    const loader = document.getElementById("initial-loader");
    loader.style.animationPlayState = "running";

    const targetElement = document.querySelector("nav ul svg");
    const targetRect = targetElement.getBoundingClientRect();

    const translateX = targetRect.left - loaderSvg.getBoundingClientRect().left;
    const translateY = targetRect.top - loaderSvg.getBoundingClientRect().top;

    Object.assign(loaderSvg.style, {
      transform: `translate(${translateX - 48}px, ${translateY - 48}px)`,
    });
  }

  const controls = useDisclosure();

  return (
    <GContext.Provider value={{ loaded: loaded, openModal: controls.onOpen }}>
      <Navbar
        links={[
          <Link key={"home"} to={"/"}>
            {"Home"}
          </Link>,
          <Link key={"about-us"} to={"/about"}>
            {"About us"}
          </Link>,
          <Link key={"services"} to={`/services/"outdoor+signage"`}>
            {"Services"}
          </Link>,
          <Button key={"contact-us"} Class={"btn-pri"}>
            {"Contact us"}
          </Button>,
        ]}
      />
      <Outlet />
      <Footer />
      <Form {...controls} />
    </GContext.Provider>
  );
}

export default App;
