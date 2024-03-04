import "./navbar.scss";
import Logo from "../../assets/Logos/LogoNoOutline.svg?react";
import BackToTop from "./BackToTop";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
Navbar.propTypes = {
  links: PropTypes.array.isRequired,
};

function Navbar({ links }) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    // Event listener function
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScroll(scrollPosition);
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <BackToTop
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        Class={`${scroll > 100 ? "visible" : "hidden"}`}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </BackToTop>
      <div className={`bg-wrapper navbar ${scroll > 10 ? "opened" : "closed"}`}>
        <nav id="navbar">
          <ul>
            <Logo />
            {links.map((link, index) => {
              return <li key={index}>{link}</li>;
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
