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

Builder.registerComponent(CenCarousel, {
  name: "Carousel",
  inputs: [
    {
      name: "autoplay",
      type: "boolean",
    },
    {
      name: "shape",
      type: "string",
      defaultValue: "dot",
      enum: ["dot", "bar"],
    },
    {
      name: "placement",
      type: "string",
      defaultValue: "md",
      enum: ["top", "bottom", "left", "right"],
    },
    {
      name: "slides",
      type: "list",
      subFields: [
        {
          name: "image",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
        },
      ],
      defaultValue: [],
    },
  ],
});

export default CenCarousel;
