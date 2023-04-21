import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShowMore from "react-show-more-button";

import { faXmark, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import Favimg from "../images/image 1.png";
const FavoriteCard = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
        <div class="col d-flex ms-4 flex-column mx-auto FavCard">
          <div className="FavCardImg">
            {" "}
            <div className=" FavRemove">
              {" "}
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
              {" "}
              <h4 className="FavProduct-Title">Samsang Galaxy A53 </h4>
            </div>

            <div className="d-flex justify-content-end">
              <button className="FavDownButt ">
                {" "}
                <FontAwesomeIcon icon={faAngleDown} className="FavIcon" />
              </button>
            </div>
          </div>
          <div>
            <p className="FavminDesc mt-2">5G 8GB/256GB 46MP</p>
            <p className="FavminDesc mt-2">Medium</p>
            <p className="FavminDesc ">$526</p>
          </div>

          <div class=" d-flex flex-row justify-content-between FavButtons">
            <button id="FavMore" className=" me-2">
              More Information
            </button>
            <button className="FavAdd">Add to Card</button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default FavoriteCard;
