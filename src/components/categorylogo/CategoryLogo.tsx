import React from "react";
import {
  Container,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";
import { category } from "./CategoryData";
import "./categoryItem.style.css";

const CategoryLogo = () => {
  return (
    <>
      <div className="category-logo-section my-3">
        <Container>
          <Row>
            {category.map((item) => (
              <Col>
                <OverlayTrigger
                  overlay={
                    <Tooltip id="tooltip-disabled">{item.hover}</Tooltip>
                  }
                >
                  <span className="d-inline-block">
                    <div className="category-logo-container d-flex justify-content-center align-items-center p-2">
                      <img
                        className="w-25 h-25"
                        src={item.src}
                        alt={item.alt}
                      />
                    </div>
                  </span>
                </OverlayTrigger>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CategoryLogo;
