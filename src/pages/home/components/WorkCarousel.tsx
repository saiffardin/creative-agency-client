import Carousel, { CarouselItems } from "@components/Carousel";
import carousel_1 from "@assets/images/carousel-1.png";
import carousel_2 from "@assets/images/carousel-2.png";
import carousel_4 from "@assets/images/carousel-4.png";
import carousel_5 from "@assets/images/carousel-5.png";

const CAROUSEL_ITEMS: CarouselItems[] = [
  { imgSrc: carousel_1, imgAltTxt: "First slide" },
  { imgSrc: carousel_2, imgAltTxt: "Second slide" },
  { imgSrc: carousel_4, imgAltTxt: "Forth slide" },
  { imgSrc: carousel_5, imgAltTxt: "Fifth slide" },
];

const WorkCarousel = () => {
  return (
    <main
      id="OurPortfolio"
      className="work-carousel-div d-flex flex-column align-items-center"
    >
      <h1 className="text-center">
        Here are some of <span>our works</span>
      </h1>

      <Carousel interval={3000} items={CAROUSEL_ITEMS} />
    </main>
  );
};

export default WorkCarousel;
