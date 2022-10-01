import React, { useState } from "react";
import { SliderData } from "./SliderData";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { IconButton } from "@mui/material";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      <IconButton className="right-arrow" onClick={nextSlide}>
        <ArrowCircleLeftIcon />
      </IconButton>
      <IconButton className="left-arrow">
        <ArrowCircleRightIcon />
      </IconButton>
      {SliderData.map((slider, index) => {
        return (
          <img src={slider.image} className="image" alt="travel images " />
        );
      })}
    </div>
  );
};

export default ImageSlider;
