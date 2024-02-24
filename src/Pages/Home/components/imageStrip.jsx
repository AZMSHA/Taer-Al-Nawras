import useImageSrc from "../../../Components/Hooks/useImageSrc";

const Strip = ({animate,multiply}) => {

  const images = useImageSrc("src/pages/Home/assets/imageStrip",3,["jpg","png","webp","svg"])

  return (
    <>
      {images.map((image,index) => (
        <img key={image} onError={(e)=>e.target.remove()} className={`img${index+multiply}`} style={animate} src={image} />
      ))}
    </>
  );
};

export default Strip;

