import React from "react";
import { Carousel } from "rsuite";
import { useState, useEffect } from "react";

export default function CenCarousel(props) {
  const [activeIndex, setActiveIndex] = useState(2);
  const [placement, setPlacement] = React.useState("bottom");
  const [shape, setShape] = React.useState("dot");
  useEffect(() => {
    setPlacement(props.placement);
    setShape(props.shape);
  }, [props]);
  const images = [
    "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1",
    "https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1",
  ];
  return (
    <>
      {images && (
        <Carousel
          // key={`${props.placement}.${props.shape}`}
          //  placement={props.placement}
          //shape={props.shape}
          //  autoplay={props.autoplay}
          className="custom-slider"
          activeIndex={activeIndex}
          onSelect={(index) => {
            setActiveIndex(index);
          }}
        >
          {/* {images.map((carouselimg) => {
            <img src={carouselimg} height="250" />;
          })} */}
          <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1"
            height="250"
          />
          <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
            height="250"
          />
          <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
            height="250"
          />
          <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
            height="250"
          />
          <img
            src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
            height="250"
          />
        </Carousel>
      )}
    </>
  );
}
