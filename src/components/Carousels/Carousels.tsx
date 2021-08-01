import * as React from "react";
import * as img from "../assets/images/meat2.jpg";

import Carousel from "react-bootstrap/Carousel";
import "./Carousels.style.css";
import meat from "../../assets/images/meat2.jpg";
import softDrink from "../../assets/images/SoftDrinksEdited.jpg";
import labaniat from "../../assets/images/labaniat.png";

const Carousels = () => {
  return (
    <div className="Carousels-container">
      <Carousel className="w-100 h-100 bg-dark">
        <Carousel.Item className="Carousels-img-container">
          <img className="Carousels-img" src={meat} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item className="Carousels-img-container">
          <img className="Carousels-img" src={softDrink} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item className="Carousels-img-container">
          <img className="Carousels-img" src={labaniat} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
