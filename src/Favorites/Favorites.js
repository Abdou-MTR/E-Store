import React from "react";
import FavoriteCard from "./FavoriteCard";
import "../favorites.css";
const Favorites = () => {
  return (
    <main>
      <div className="container d-flex flex-column">
        <div className="d-flex justify-content-start flex-column">
          <h3 className="Favorite-Title">Favorites</h3>
          <h6 className="Favorite-num">03 items</h6>
        </div>
        <FavoriteCard />
      </div>
    </main>
  );
};

export default Favorites;
