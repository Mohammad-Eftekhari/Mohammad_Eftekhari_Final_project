import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./singlePage.style.css";
import img from "../../assets/images/550.png";
import RatingStar from "../../components/Rating/RatingStar";

const Single = () => {
  return (
    <div className="single-page-container d-flex flex-column">
      <Container className="h-100">
        <Row className="h-100">
          <Col xs={4} className="item-image-section bg-warning p-0">
            <div>
              <img className="w-100 h-100" src={img} alt="" />
            </div>
          </Col>
          <Col xs={8} className="item-info-section p-3">
            <div className="item-info-header d-flex">
              <h1 className="item-info-section-title text-right">
                کروسان پچ پچ
              </h1>
              <div className="text-left">
                <RatingStar />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Single;
