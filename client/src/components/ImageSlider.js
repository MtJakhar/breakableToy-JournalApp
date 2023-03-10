import React, { useState, useEffect } from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <BsArrowLeftCircle className="left-arrow" onClick={prevSlide} />
      <BsArrowRightCircle className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current ? (
              <img src={slide.image} alt="pizzaImage" className="image" />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
