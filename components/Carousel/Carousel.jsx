import { BuilderBlocks, Builder } from "@builder.io/react";
import { Carousel } from "rsuite";
import React from "react";

function CenCarousel(props) {
  const [activeIndex, setActiveIndex] = React.useState(2);

  return (
    <Carousel
      activeIndex={activeIndex}
      onSelect={(index) => {
        setActiveIndex(index);
      }}
      autoplay={props.autoplay}
      placement={props.placement}
      shape={props.shape}
    >
      {props.slides?.length ? (
        props.slides.map((slide, index) => (
          <img key={index} src={slide.image}></img>
        ))
      ) : (
        <img src={props.image}></img>
      )}
      <BuilderBlocks
        parentElementId={props.builderBlock.id}
        dataPath="component.options.slides"
      />
    </Carousel>
  );
}

export default CenCarousel;
