import "./button.scss";
import { useState } from "react";
import PropTypes from "prop-types";

Button.propTypes = {
  Class: PropTypes.string.isRequired,
  children: PropTypes.any,
};

function Button({ Class, children, ...rest }) {
  const [pressed, setPressed] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setPressed(true);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      setPressed(false);
    }
  };

  return (
    <button
      className={Class + (pressed ? " pressed" : "")}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
