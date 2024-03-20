import useImage from "../Hooks/useImageSrc";
import PropTypes from "prop-types";

const Images = ({ imageData, style, set, alt, ...rest }) => {
  const images = useImage(...Object.values(imageData));

  return (
    <>
      {images.map((image, index) => (
        <img
          {...rest}
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
