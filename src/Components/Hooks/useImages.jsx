import { useEffect, useState } from "react";
const isLiteralObject = function (a) {
  return !!a && a.constructor === Object;
};

/**expects source relative to the servers root directory i.e, "/pathToImages"
 * - expected = /assets/services/serviceImage
 * - all images you want should have same name, but index(number) should increase with each image.
 * -- example: serviceImage(1).jpg, serviceImage(2).jpg, serviceImage(3).jpg, ... and so on
 *
 * Length is the expected number of images, can be more.
 * - cases where required image does not exist is handled.
 *
 * format is the format of the image as a string such as: "png","jpg","jpeg" etc.
 * - to handle multiple formats you can use this hook once for each format
 *
 * args are the Html attributes you want the images to have but in the form of object literals.
 * - example: useImages( "/assets/services/serviceImage" , 10 , "jpg" , {alt:"myImage"} , {id:1} , {className:"services"} ) **/
const fetchImages = (source, length, format, ...args) => {
  let props = {};

  args.forEach((prop) => {
    if (isLiteralObject(prop)) {
      props = { ...props, ...prop };
    }
  });

  const list = [];
  for (let index = 1; index <= length; index++) {
    const src = source + `(${index})` + "." + format;

    list.push(
      <img
        {...props}
        key={src}
        onError={(e) => e.target.remove()}
        alt={props.alt + " " + index}
        className={props.className + index}
        src={src}
      />
    );
  }
  return list;
};

export default function useImages(source, length, format, ...args) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(fetchImages(source, length, format, ...args));
  }, [source, length, format]);

  return images;
}
