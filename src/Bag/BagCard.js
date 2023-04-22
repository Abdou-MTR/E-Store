import React from "react";
import image from "../images/image 1.png";
import "../bag.css";
const BagCard = () => {
  return (
    <div className="d-flex flex-row justify-content-between mt-5 container">
      <div className="part-1 d-flex flex-row">
        <div></div>
        <img src={image} alt="img" className="BagImg" />
        <div className="column ms-3">
          <h5 className="Bag-Title ">Samsung Galaxy A53</h5>
          <p className="Bag-Dis mt-4">5G 8gb/128gb 48px</p>
          <p className="Bag-Dis">Weight : 50g</p>
          <p className="Bag-Dis">Color : Blue</p>
          <div className="d-flex flex-row">
            <h6>Add to Favorite</h6>
            <h6>Add to Favorite</h6>
          </div>
        </div>
      </div>
      <div className="part-2"></div>
    </div>
  );
};

export default BagCard;
