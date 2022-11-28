import Carousel from 'react-bootstrap/Carousel';
import slide1 from "./images/slide2.jpg"
import slide2 from "./images/slide1.jpg"
import slide3 from "../assets/cp.jpg"
import slide4 from "../assets/promo.jpg"
import React from 'react'

// import slide3 from "./images/flagtear.jpg"

//add image 

function Slide() {
      return (
        <Carousel>
            {/* <Carousel.Item interval={6000}>
            <img
              className="d-block w-100"
              src={slide3}
              alt="Third slide"
            />
          </Carousel.Item> */}
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src={slide2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src={slide3}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={10000}>
            <img
              className="d-block w-100"
              src={slide4}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      );
    }
    

export default Slide;
