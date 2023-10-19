import React from "react";
import { Carousel } from "rsuite";

export default function CenCarousel(props) {
  const [activeIndex, setActiveIndex] = useState(props.activeIndex);
  const [placement, setPlacement] = React.useState("bottom");
  const [shape, setShape] = React.useState("dot");
  useEffect(() => {
    setPlacement(props.placement);
    setShape(props.shape);
  }, [props]);
  return (
    <>
      {props.images && (
        <Carousel
          key={`${props.placement}.${props.shape}`}
          placement={props.placement}
          shape={props.shape}
          autoplay={props.autoplay}
          className="custom-slider"
          activeIndex={props.activeIndex}
          onSelect={(index) => {
            setActiveIndex(index);
          }}
        >
          {props.images.map((carouselimg) => {
            <img src={carouselimg.imgsrc} height="250" />;
          })}
        </Carousel>
      )}
    </>
  );
}
