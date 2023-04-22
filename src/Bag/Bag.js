import React from "react";
import BagCard from "./BagCard";

import "../bag.css";

const Bag = () => {
  return (
    <div>
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-start flex-column">
          <h3 className="Favorite-Title">Bag</h3>
          <h6 className="Favorite-num">03 items</h6>
        </div>
      </div>
      <div className="d-flex flex-row">
        <BagCard />
        <div className="checkout"> </div>
      </div>
    </div>
  );
};

export default Bag;
