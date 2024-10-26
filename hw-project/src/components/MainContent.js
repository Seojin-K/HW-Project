import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

function MainContent() {
  return (
    <div>
      {/* Bootstrap Carousel */}
      <div id="carousel">
      <Carousel className="my-4" data-bs-theme='dark'>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=First+Slide"
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
            src="https://via.placeholder.com/800x400?text=First+Slide"
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
            src="https://via.placeholder.com/800x400?text=First+Slide"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide Label</h3>
            <p>Some descriptive text for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

      {/* Additional Card */}
      <Card className="my-4">
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            This is an example card using Bootstrap styling in a React app.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MainContent;