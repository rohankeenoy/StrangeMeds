import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar'
import { Carousel, Container, Card } from 'react-bootstrap';
import '../components/Gallery.css'
import july81 from '../assets/july81.jpg'
import july82 from '../assets/july82.jpg'
import july83 from '../assets/july83.jpg'
import july84 from '../assets/july84.jpg'
import july85 from '../assets/july85.jpg'
import july86 from '../assets/july86.jpg'
import jan81 from '../assets/jan81.jpg'
import jan82 from '../assets/jan82.jpg'
import jan83 from '../assets/jan83.jpg'
import jan84 from '../assets/jan84.jpg'
import jan85 from '../assets/jan85.jpg'
import jan86 from '../assets/jan86.jpg'
import oct181 from '../assets/oct181.jpg'
import oct182 from '../assets/oct182.jpg'
import oct183 from '../assets/oct183.jpg'

import Logos from '../components/logosContainer'

const Gallery = () => {
  return (
    <div> 
      <Navbar/>
      <Container className="content-container">
        <h1 className="h1class">July 8, 2023</h1>
        <Carousel controls={true}>
          <Carousel.Item interval={3000}>
            <img
              className=" image-resize1"
              src={july81}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className=" image-resize1"
              src={july85}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className=" image-resize1"
              src={july83}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className=" image-resize1"
              src={july84}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className=" image-resize1"
              src={july82}
              alt="Fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className=" image-resize1"
              src={july86}
              alt="Sixth slide"
            />
          </Carousel.Item>
        </Carousel>

        {/* Add more carousels here */}
      </Container>
      <Container className="content-container">
        <h1 className="h1class">Jan 6, 2018</h1>
        <Carousel controls={true}>
          <Carousel.Item interval={3000}>
            <img
              className=" image-resize1"
              src={jan81}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="image-resize1"
              src={jan85}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="image-resize1"
              src={jan83}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className=" image-resize1"
              src={jan84}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className=" image-resize1"
              src={jan82}
              alt="Fifth slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="image-resize1"
              src={jan86}
              alt="Sixth slide"
            />
          </Carousel.Item>
        </Carousel>

        {/* Add more carousels here */}
      </Container>
      <Container className="content-container">
        <h1 className="h1class">October 18, 2016</h1>
        <Carousel controls={true}>
          <Carousel.Item interval={3000}>
            <img
              className=" image-resize1"
              src={oct181}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="image-resize1"
              src={oct182}
              alt="Sixth slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className=" image-resize1"
              src={oct183}
              alt="Sixth slide"
            />
          </Carousel.Item>
          </Carousel>
        {/* Add more carousels here */}
      </Container>
      <div> 
      {/* ... Your existing code ... */}
      <Logos style={{ position: 'absolute', bottom: '20px', left: '20px',display: 'block' }} />
      {/* ... Your existing code ... */}
    </div>
      <Container className ="footer">
        <hr />
        <p><a href="/contact">CONTACT US!</a></p>
        <p>Developed by Rohan <a href="https://rohankeenoy.github.io/">https://rohankeenoy.github.io/</a></p>
      </Container>
    </div>
  );
};

export default Gallery;
