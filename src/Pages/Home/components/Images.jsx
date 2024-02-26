import useImageSrc from "../../../Components/Hooks/useImageSrc";

const Images = ({imageData,animate,delay,multiple}) => {
  const images = useImageSrc(...Object.values(imageData))

  return (
    <>
      {images.map((image,index) => (
        <img key={image} onError={(e)=>e.target.remove()} className={`img${index + (images.length * multiple) }`} style={{...animate,animationDelay:delay+"ms"}} src={image} />
      ))}
    </>
  );
};

export default Images;

