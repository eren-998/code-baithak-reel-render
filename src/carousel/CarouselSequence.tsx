import React from "react";
import { useCurrentFrame } from "remotion";
import { Slide1Cover } from "./Slide1";
import { Slide2 } from "./Slide2";
import { Slide3 } from "./Slide3";
import { Slide4 } from "./Slide4";
import { Slide5 } from "./Slide5";
import { Slide6 } from "./Slide6";
import { Slide7 } from "./Slide7";
import { Slide8 } from "./Slide8";

const slides = [
  Slide1Cover,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
];

export const CarouselSequence: React.FC = () => {
  const frame = useCurrentFrame();
  const index = Math.min(Math.max(frame, 0), slides.length - 1);
  const CurrentSlide = slides[index];

  return <CurrentSlide />;
};
