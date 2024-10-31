import { useState } from "react";
import { Carousel as CarouselRB } from "react-bootstrap";

export interface CarouselItems {
  imgSrc: string;
  imgAltTxt: string;
}

interface Props {
  interval: number;
  items: CarouselItems[];
}

const Carousel = (props: Props) => {
  const { interval, items } = props;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <CarouselRB
      activeIndex={index}
      onSelect={handleSelect}
      controls={false}
      slide={true}
    >
      {items?.map((item, indx) => (
        <CarouselRB.Item interval={interval} key={indx}>
          <img
            className="carousel-img img-fluid"
            src={item.imgSrc}
            alt={item.imgAltTxt}
          />
        </CarouselRB.Item>
      ))}
    </CarouselRB>
  );
};

export default Carousel;
