import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

export const Carrousel = () => {
  return (
    <Container fluid className="mx-0 px-0">
      <Carousel>
        <Carousel.Item>
          <div className="carrousel-img-container">
            <img
              className="carrousel-img d-block w-100"
              src="https://images.unsplash.com/photo-1566832959647-5c525a08a37c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Be SAVAGE.</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carrousel-img-container">
            <img
              className="carrousel-img d-block w-100"
              src="https://images.unsplash.com/photo-1550245182-ea6a777bfd6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Be WILD.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carrousel-img-container">
            <img
              className="carrousel-img"
              src="https://images.unsplash.com/photo-1593616310899-cc991024410f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=802&q=80"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Be GENTLEMENT'S CLUB.</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
