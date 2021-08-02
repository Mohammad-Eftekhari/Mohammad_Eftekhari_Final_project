import React from "react";
import { Col } from "react-bootstrap";
import "./Item.style.css";
import pic from "../../assets/images/550.png"
import { FaPlus } from "react-icons/fa";

interface IItem{
    title:string
    value:number
}

const Item:React.FC<IItem> = (props) => {
  return (
    <>
      <Col sm="11" md="5" lg="2" className="item p-0 m-4">
              <div className="item-image">
                <img src={pic} alt="" />
              </div>
              <div className="item-info text-right">
                <div className="item-title w-100">{props.title}</div>
                <div className="item-price text-left d-flex align-items-center justify-content-between">
                  <button
                    className="addToCardBtn 
                    d-flex 
                    align-items-center 
                    justify-content-center"
                  >
                    <FaPlus/>
                  </button>
                  <div>
                    <span>{props.value}</span>
                    <span>تومان</span>
                  </div>
                </div>
              </div>
            </Col>
    </>
  );
};

export default Item;
