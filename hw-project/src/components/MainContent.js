import React from 'react';
import { Carousel, Card, Button, Container } from 'react-bootstrap';

function MainContent() {
  return (
    <Container>
      {/* Bootstrap Carousel */}
      <Carousel className="my-4" data-bs-theme='light'>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="la.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Tired of the same boring days?</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="ny.jpg"
            alt="Second slide"
          />
          <Carousel.Caption interval={3000}> 
            <h3>Reinvent Yourself!</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="chicago.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>With FreshStart!</h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
      
  );
}

export default MainContent;