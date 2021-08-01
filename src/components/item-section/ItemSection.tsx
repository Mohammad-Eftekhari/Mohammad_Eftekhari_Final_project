import React from "react";
import "./ItemSection.style.css";
import { Container, Row, Col } from "react-bootstrap";
import pic from "../../assets/images/550.png"

interface IItemSection{
  header:string;
}

const ItemSection:React.FC<IItemSection> = (props) => {
  return (
    <div className="item-section">
      <div className="item-section-title text-right">
        <h5>{props.header}</h5>
      </div>
      <div className="item-section-container">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col sm="11" md="5" lg="2" className="item p-0 m-4">
              <div className="item-image">
                <img src={pic} alt="" />
              </div>
              <div className="item-info text-right">
                <div className="item-title">شیر تازه کاله</div>
                <div className="item-price text-left">
                  <span>105,000</span>
                  <span>تومان</span>
                </div>
              </div>
            </Col>
            <Col sm="11" md="5" lg="2" className="item p-0 m-4">
              <div className="item-image"></div>
              <div className="item-info text-right">
                <div className="item-title">شیر تازه کاله</div>
                <div className="item-price text-left">
                  <span>105,000</span>
                  <span>تومان</span>
                </div>
              </div>
            </Col>
            <Col sm="11" md="5" lg="2" className="item p-0 m-4">
              <div className="item-image"></div>
              <div className="item-info text-right">
                <div className="item-title">شیر تازه کاله</div>
                <div className="item-price text-left">
                  <span>105,000</span>
                  <span>تومان</span>
                </div>
              </div>
            </Col>
            <Col sm="11" md="5" lg="2" className="item p-0 m-4">
              <div className="item-image"></div>
              <div className="item-info text-right">
                <div className="item-title">شیر تازه کاله</div>
                <div className="item-price text-left">
                  <span>105,000</span>
                  <span>تومان</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ItemSection;
