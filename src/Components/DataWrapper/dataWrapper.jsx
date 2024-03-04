import { Children, cloneElement } from "react";
import PropTypes from "prop-types";

export default function DataWrapper({ data, children, ...rest }) {
  return (
    <div {...rest}>
      {Children.map(children, (child) => {
        return cloneElement(child, { data: data });
      })}
    </div>
  );
}

DataWrapper.propTypes = {
  data: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
};
