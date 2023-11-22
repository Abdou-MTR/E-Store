import React, { useState } from "react";
import image from "../images/image 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import "../bag.css";
const BagCard = () => {
  const [number, setNumber] = useState(1);

  function increaseNumber() {
    setNumber(number + 1);
  }

  function decreaseNumber() {
    if (number > 1) {
      setNumber(number - 1);
    }
  }

  const price = 560 * number;
  return (
    <div
      className="d-flex flex-row justify-content-between mt-5 container col-8"
      style={{ height: "100%" }}
    >
      <div className="part-1 d-flex flex-row">
        <div></div>
        <img src={image} alt="img" className="BagImg" />
        <div className="column ms-3">
          <h5 className="Bag-Title ">Samsung Galaxy A53</h5>

          <p className="Bag-Dis mt-4">Weight : 50g</p>
          <p className="Bag-Dis">Color : Blue</p>
          <p className="Bag-Dis mb-4 d-flex flex-row">
            Shepping Fees :<p className="fw-bold">: Free</p>
          </p>
          <div className="d-flex flex-row mt-3">
            <h6 className="Bag-AddFav me-2">Add to Favorite</h6>
            <h6 className="Bag-RemFav me-2">Remove</h6>
          </div>
        </div>
      </div>
      <div className="part-2">
        <div className="Select">
          <button onClick={decreaseNumber} className="Select-Inc">
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span style={{ margin: "0 10px" }}>
            {number.toString().padStart(2, "0")}
          </span>
          <button onClick={increaseNumber} className="Select-Inc">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div>
          <h6 className="ms-3 Price">${price}</h6>
        </div>
      </div>
    </div>
  );
};

export default BagCard;
