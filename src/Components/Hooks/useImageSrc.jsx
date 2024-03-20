import { useEffect, useState } from "react";

/**expects source relative to the servers root directory i.e, "/pathToImages"
 * - expected = "/assets/services/serviceImage"
 * - all images you want should have same name, but index(number) should increase with each image.
 * -- example: serviceImage(1).jpg, serviceImage(2).jpg, serviceImage(3).jpg, ... and so on
 *
 * Length is the expected number of images, can be more.
 * - cases where required image does not exist is not handled.
 *
 * format is the format of the image as a string such as: "png","jpg","jpeg" etc.
 * - to handle multiple formats you can use this hook once for each format
 *
 * Usage example: - example: useImageSrc( "/assets/services/serviceImage" , 10 , "jpg" )**/
export default function useImageSrc(source, length, format) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(fetchImages(source, length, format));
  }, [source, length, format]);

  const fetchImages = (source, length, format) => {
    const list = [];
    for (let index = 1; index <= length; index++) {
      const src = source + `(${index})` + "." + format;
      list.push(src);
    }
    return list;
  };

  return images;
}
