import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './WorkCarousel.css';

import carousel_1 from '../../../images/carousel-1.png';
import carousel_2 from '../../../images/carousel-2.png';
import carousel_3 from '../../../images/carousel-3.png';
import carousel_4 from '../../../images/carousel-4.png';
import carousel_5 from '../../../images/carousel-5.png';


const WorkCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <main id='OurPortfolio' className="WorkCarousel-div d-flex flex-column align-items-center">
            <h1 className='text-center'>Here are some of <span>our works</span></h1>

            <Carousel activeIndex={index} onSelect={handleSelect} controls={false} slide={true}>
                <Carousel.Item interval={500}>
                    <img
                        className="carousel-img"
                        src={carousel_1}
                        alt="First slide"
                    />

                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                        className="carousel-img"
                        src={carousel_2}
                        alt="Third slide"
                    />

                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                        className="carousel-img"
                        src={carousel_3}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                        className="carousel-img"
                        src={carousel_4}
                        alt="Forth slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                        className="carousel-img"
                        src={carousel_5}
                        alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>

        </main>
    );
};



export default WorkCarousel;