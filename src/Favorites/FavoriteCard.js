import React from "react";
import Favimg from "../images/image 1.png";
const FavoriteCard = () => {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 p-5  ">
          <div className="col">
            <div className="FavCardImg">
              {" "}
              <button className="FavRemove d-flex justify-content-end">
                X
              </button>
              <img src={Favimg} alt="FavImg" />
            </div>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default FavoriteCard;
