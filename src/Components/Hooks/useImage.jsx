import { useState, useEffect } from "react";

/**
 * formats is an array of formats that are expected as string such as: [ "png" , "jpg" ,"jpeg"] etc.
 *
 * the switches function should be defined as follows:
 * const switches = (format, index) => {
    switch (format) {
      case "jpeg":
        return import(`./assets/heroImages(${index}).jpeg`);
      case "jpg":
        return import(`./assets/heroImages(${index}).jpg`);

      default:
        return new Promise((resolve, reject) => {
          if (index < -1) {
            resolve(format);
          }
          reject(format);
        });
    }
  }
 * - import function expects source relative to the directory in which switches funtion is defined.
 * - such as: `./assets/services/ServiceImage(${index}).{format}`
 * - example = import(`./assets/services/ServiceImage(${index}).jpeg`);
 * - all images you want should have same name, but index should increase with each image.
 * -- example: ServiceImage(1).jpg, ServiceImage(2).jpg, ServiceImage(3).jpg, ... and so on
 * - add a case statement for every format in formats array:
 * --  if want pngs to be imported add:
 * --- case "png":
 * ---   return import(`./assets/services/ServiceImage(${index}).png`)
 * -- if dont want pngs, jpgs, jpegs etc just remove those statements and formats from formats array
 *
 * Length is the expected number of images, can be more.
 * - cases where required image does not exist is handled.
 *
 * Usage example:
 * useImage( (format, index) => {
    switch (format) {
      case "jpeg":
        return import(`./assets/heroImages(${index}).jpeg`);
      case "jpg":
        return import(`./assets/heroImages(${index}).jpg`);

      default:
        return new Promise((resolve, reject) => {
          if (index < -1) {
            resolve(format);
          }
          reject(format);
        });
    }
  } , 10 , ["jpg", "jpeg"] )**/

export default function useImage(switches, length, formats) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    importImages(switches, length, formats)
      .then((src) => {
        setImages(src.filter((item) => item !== undefined)); // Filter out errors from the result array
      })
      .catch((err) => console.log(err));
  }, [switches]);

  function importImages(switches, length, formats) {
    const promises = [];
    for (let index = 1; index <= length; index++) {
      formats.forEach((format) => {
        promises.push(
          switches(format, index)
            .then((result) => result.default)
            .catch(() => undefined)
        );
      });
    }

    return Promise.all(promises);
  }

  return images;
}
