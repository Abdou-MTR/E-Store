import React from "react";
import image from "../images/image 1.png";
import "../bag.css";
const BagCard = () => {
  return (
    <div className="d-flex flex-row justify-content-between mt-5 container">
      <div className="part-1 d-flex flex-row">
        <div></div>
        <img src={image} alt="img" className="BagImg" />
        <div className="column">
          <h5 className="Bag-Title">Samsung Galaxy A53</h5>
        </div>
      </div>
      <div className="part-2"></div>
    </div>
  );
};

export default BagCard;
