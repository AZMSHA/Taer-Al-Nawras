import useImage from "../Hooks/useImage";
import PropTypes from "prop-types";

const Images = ({ imageData, style, set, alt }) => {
  const images = useImage(...Object.values(imageData));

  return (
    <>
      {images.map((image, index) => (
        <img
          key={image}
          className={`img${index + images.length * set}`}
          loading="lazy"
          style={style}
          src={image}
          alt={`${alt + " " + index}`}
        />
      ))}
    </>
  );
};

Images.proptypes = {
  imageData: PropTypes.object.isRequired,
  style: PropTypes.object,
  set: PropTypes.number,
};

export default Images;
