import React from "react";
import BagCard from "./BagCard";

import "../bag.css";

const Bag = () => {
  return (
    <div>
      <div className="ms-5 d-flex flex-column  ">
        <div className="d-flex justify-content-start flex-column ">
          <h3 className="Favorite-Title">Bag</h3>
          <h6 className="Favorite-num">03 items</h6>
        </div>
      </div>
      <div className="d-flex flex-row row mx-lg-2">
        <BagCard />
        <div className="checkout col-4 ">
          <div className="d-flex flex-column first">
            {" "}
            <h2 className="fw-bold">Summary</h2>
            <div className="d-flex flex-column mt-3 ">
              {" "}
              <div className="d-flex flex-row justify-content-between pricing">
                {" "}
                <div>
                  {" "}
                  <p>substotal</p>
                </div>
                <div>
                  {" "}
                  <p>9000$</p>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-between pricing">
                {" "}
                <div>
                  {" "}
                  <p>Shepping Fees</p>
                </div>
                <div>
                  {" "}
                  <p>200$</p>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column">
            {" "}
            <div className="d-flex flex-row Total justify-content-between">
              {" "}
              <h4 className="fw-normal">Total :</h4>{" "}
              <h4 className="totalPrice">9200$</h4>
            </div>
            <button className="FavAdd mt-3">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
