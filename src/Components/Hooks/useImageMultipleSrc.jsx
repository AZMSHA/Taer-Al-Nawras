import { useEffect, useState } from "react";

/**
 * useImageMultipleSrc expects sources which is an array of object literals each containing
 * an src, count and format property.
 * - expected [
 *  {src:"/assets/services/serviceImage",count:26,format:"jpg"},
 *  {src:"/assets/products/productImage",count:15,format:"png"},
 *  {src:"/assets/services/serviceImage",count:6,format:"jpeg"}, ...
 * ]
 *
 * expects src relative to the servers root directory i.e, "/pathToImages"
 * - expected = "/assets/services/serviceImage"
 * - all images you want should have same name, but index(number) should increase with each image.
 * -- example: serviceImage(1).jpg, serviceImage(2).jpg, serviceImage(3).jpg, ... and so on
 *
 * count is the number of images to import, can be more.
 * - cases where required image does not exist is not handled.
 *
 * format is the format of the image as a string such as: "png","jpg","jpeg" etc.
 *
 * Usage example: - example: useImageMultipleSrc([
 *  {src:"/assets/services/serviceImage",count:26,format:"jpg"},
 *  {src:"/assets/products/productImage",count:15,format:"png"},
 *  {src:"/assets/services/serviceImage",count:6,format:"jpeg"}, ...
 * ])**/
export default function useImageMultipleSrc(sources) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(fetchImages(sources));
  }, [sources]);

  const fetchImages = (sources) => {
    const list = [];
    sources.forEach((srcSet) => {
      for (let index = 1; index <= srcSet.count; index++) {
        const src = srcSet.src + `(${index})` + "." + srcSet.format;
        list.push(src);
      }
    });
    return list;
  };

  return images;
}
