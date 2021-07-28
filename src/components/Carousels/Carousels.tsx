import * as React from "react";
import * as img from "../assets/images/meat2.jpg";

import Carousel from "react-bootstrap/Carousel";
import "./Carousels.style.css";
import meat from "../../assets/images/meat2.jpg";
import softDrink from "../../assets/images/SoftDrinks.png";
import labaniat from "../../assets/images/labaniat.png";

const Carousels = () => {
  return (
    <div className="Carousels-container">
      <Carousel className="w-100 h-100 bg-dark">
        <Carousel.Item className="Carousels-img-container">
          <img className="Carousels-img" src={meat} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="Carousels-img-container">
          <img className="Carousels-img" src={softDrink} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="Carousels-img-container">
          <img className="Carousels-img" src={labaniat} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
