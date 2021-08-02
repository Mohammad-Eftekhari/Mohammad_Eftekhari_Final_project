import React from "react";
import "./ItemSection.style.css";
import { Container, Row, Col } from "react-bootstrap";
import pic from "../../assets/images/550.png";
import { FaPlus } from "react-icons/fa";
import Item from "../Item/Item";

interface IItemSection {
  header: string;
}

const ItemSection: React.FC<IItemSection> = (props) => {
  return (
    <div className="item-section">
      <div className="item-section-title text-right">
        <h5>{props.header}</h5>
      </div>
      <div className="item-section-container">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Item title={"کروسان پچ پچ"} value={150000}/>
            <Item title={"کروسان پچ پچ"} value={150000}/>
            <Item title={"کروسان پچ پچ"} value={150000}/>
            <Item title={"کروسان پچ پچ"} value={150000}/>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ItemSection;
