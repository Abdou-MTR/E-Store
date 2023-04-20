import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark, faAngleDown } from "@fortawesome/free-solid-svg-icons";

import Favimg from "../images/image 1.png";
const FavoriteCard = () => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 p-5  ">
          <div className="col d-flex flex-column FavCard">
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
                <h5 className="FavProduct-Title">Samsang Galaxy A53 </h5>
              </div>

              <div className="d-flex justify-content-end">
                <button className="FavDownButt">
                  {" "}
                  <FontAwesomeIcon icon={faAngleDown} className="FavIcon" />
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default FavoriteCard;
