import { useEffect, useReducer } from "react";
import Button from "../Button/button.jsx";
import PropTypes from "prop-types";
import "./carousel.scss";

function reducer(state, action) {
  switch (action.type) {
    case "+":
      return {
        previous:
          state.previous + 1 > action.lastIndex ? 0 : state.previous + 1,
        currentImage1:
          state.currentImage1 + 1 > action.lastIndex
            ? 0
            : state.currentImage1 + 1,
        currentImage2:
          state.currentImage2 + 1 > action.lastIndex
            ? 0
            : state.currentImage2 + 1,
        currentImage3:
          state.currentImage3 + 1 > action.lastIndex
            ? 0
            : state.currentImage3 + 1,
        next: state.next + 1 > action.lastIndex ? 0 : state.next + 1,
      };
    case "-":
      return {
        previous:
          state.previous - 1 < 0 ? action.lastIndex : state.previous - 1,
        currentImage1:
          state.currentImage1 - 1 < 0
            ? action.lastIndex
            : state.currentImage1 - 1,
        currentImage2:
          state.currentImage2 - 1 < 0
            ? action.lastIndex
            : state.currentImage2 - 1,
        currentImage3:
          state.currentImage3 - 1 < 0
            ? action.lastIndex
            : state.currentImage3 - 1,
        next: state.next - 1 < 0 ? action.lastIndex : state.next - 1,
      };
    case "reset":
      return {
        previous: 0,
        currentImage1: 1,
        currentImage2: 2,
        currentImage3: 3,
        next: 4,
      };
  }
}

const Carousel = ({ images, interval }) => {
  const [positions, setPositions] = useReducer(reducer, {
    previous: 0,
    currentImage1: 1,
    currentImage2: 2,
    currentImage3: 3,
    next: 4,
  });
  const lastIndex = images.length - 1;

  useEffect(() => {
    const timer = setInterval(
      () => setPositions({ type: "+", lastIndex: lastIndex }),
      interval
    );
    return () => clearInterval(timer);
  });

  useEffect(() => {
    setPositions({ type: "reset" });
  }, [images]);

  const getPositionClass = (imageIndex) => {
    switch (imageIndex) {
      case positions.previous:
        return "previous-image";
      case positions.currentImage1:
        return "current-image1";
      case positions.currentImage2:
        return "current-image2";
      case positions.currentImage3:
        return "current-image3";
      case positions.next:
        return "next-image";
      default:
        return "hidden-image";
    }
  };

  return (
    <div className="carousel">
      <Button
        aria-label={"previous image"}
        Class={"btn-pri carousel-btn-left"}
        title={"previous image"}
        onClick={() => setPositions({ type: "-", lastIndex: lastIndex })}
      >
        <i className="fa-solid fa-play"></i>
      </Button>
      <div className="carousel-images">
        {images.map((image, ind) => {
          return (
            <img
              onError={(e) => (e.target.src = "./placeholder.webp")}
              key={image}
              loading="lazy"
              className={getPositionClass(ind)}
              src={image}
              alt={"A carousel of images showcasing our work " + ind}
            />
          );
        })}
      </div>
      <Button
        aria-label={"next image"}
        Class={"btn-pri carousel-btn-right"}
        title={"next image"}
        onClick={() => setPositions({ type: "+", lastIndex: lastIndex })}
      >
        <i className="fa-solid fa-play"></i>
      </Button>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  interval: PropTypes.number.isRequired,
};

export default Carousel;
