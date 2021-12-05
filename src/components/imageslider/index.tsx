/** @format */
import Slider from "react-slick";
import React from "react";
import "./ImageSlider.scss";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

interface PropsInterface {
  children: React.ReactNode;
  title?: string;
}

interface ClickProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
function SampleNextArrow(props: ClickProps) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-arrow--right" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
}

function SamplePrevArrow(props: ClickProps) {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-arrow--left" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
}
const settingsSlider = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const imageSlider: React.FC<PropsInterface> = (
  props: PropsInterface
): JSX.Element => {
  return (
    <>
      <div className="slider-image-components">
        <div className="slider-image-components__header">
          <h1>{props.title}</h1>
        </div>
        <Slider {...settingsSlider} className="list-image-slider">
          {props.children}
        </Slider>
      </div>
    </>
  );
};
export default imageSlider;
