import useImage from "../Hooks/useImage";

const Images = ({ imageData, style, set }) => {
  const images = useImage(...Object.values(imageData));

  return (
    <>
      {images.map((image, index) => (
        <img
          key={image}
          className={`img${index + images.length * set}`}
          style={style}
          src={image}
        />
      ))}
    </>
  );
};

export default Images;
