import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Favimg from "../images/image 1.png";

const FavoriteCard = () => {
  const [showDetails, setShowDetails] = useState(true);

  const handleDetailsClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div className="col d-flex ms-4 flex-column mx-auto FavCard">
          <div className="FavCardImg">
            <div className="FavRemove">
              <button className="FavRemoveButt">
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ color: " var(--var-button-color)" }}
                />
              </button>
            </div>
            <img src={Favimg} alt="FavImg" />
          </div>
          <div className="FavTitle d-flex justify-content-between mt-4">
            <div>
              <h4 className="FavProduct-Title">Samsang Galaxy A53 </h4>
            </div>

            <div className="d-flex justify-content-end">
              <button className="FavDownButt" onClick={handleDetailsClick}>
                <FontAwesomeIcon icon={faAngleDown} className="FavIcon" />
              </button>
            </div>
          </div>
          <div
            className={`FavDetails ${showDetails ? "closed" : "open"}`}
            onClick={handleDetailsClick}
          >
            <div className="mt-1">
              <div className="d-flex flex-row info">
                <h6 className="card-info">Brand: </h6>
                <p>Samsang</p>
              </div>
              <div className="d-flex flex-row info">
                <h6 className="card-info">Model:</h6>
                <p>Samsung A53</p>
              </div>
              <div className="d-flex flex-row info">
                <h6 className="card-info">Color: </h6>
                <p>Blue</p>
              </div>
              <div className="d-flex flex-row info">
                <h6 className="card-info">Weight: </h6>
                <p>50g</p>
              </div>
            </div>
          </div>
          <div>
            <p className="FavminDesc mt-2">5G 8GB/256GB 46MP</p>
            <p className="FavminDesc mt-2">Medium</p>
            <p className="FavminDesc ">$526</p>
          </div>

          <div className="d-flex flex-row justify-content-between FavButtons">
            <button id="FavMore" className=" me-2">
              More Information
            </button>
            <button className="FavAdd">Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
