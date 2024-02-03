import { lazy, useState, useEffect } from "react"

function importImages(url, length) {

  const promises = [];

  for (let index = 1; index <= length; index++) {
    promises.push(
      import(`../assets/${url + index}.png`)
        .then((result) => result.default)
        .catch((err) => undefined)
    );

    promises.push(
      import(`../assets/${url + index}.jpg`)
        .then((result) => result.default)
        .catch((err) => undefined)
    );

    promises.push(
      import(`../assets/${url + index}.svg`)
        .then((result) => result.default)
        .catch((err) => undefined)
    );
  }

  return Promise.all(promises); // Wait for all promises to be resolved
}

const Strip = ({animate,count}) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    importImages("imageStrip", 3)
      .then((src) => {
        setImages(src.filter((item) => item !== undefined)); // Filter out errors from the result array
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {images.map((image) => (
        <img key={image} style={{animationPlayState:animate?"running":"paused"}} onLoad={count} src={image} />
      ))}
    </>
  );
};

export default Strip;

