import "./navbar.scss";
import Logo from "../../assets/Logos/LogoNoOutline.svg?react";
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
    <div className={`bg-wrapper navbar ${scroll > 10 ? "opened" : "closed"}`}>
      <nav>
        <ul>
          <Logo />
          {links.map((link, index) => {
            return <li key={index}>{link}</li>;
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
