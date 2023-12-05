import "../App.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
export default function CardProduct(props) {
  const [liked, setLiked] = useState(false);

  const likedHandler = async () => {
    try {
      // Make a request to your backend to add/remove the product from favorites
      await axios.post("http://localhost:5000/api/favorites", {
        productId: props.id,
      });

      // Toggle the liked state locally
      setLiked(!liked);
    } catch (error) {
      console.error("Error adding product to favorites:", error);
    }
  };

  let nbrstars = props.rating;
  let stars = [];
  let Empty = 5 - nbrstars;

  for (let i = 0; i < nbrstars; i++) {
    stars.push(<i className="fa-solid fa-star star-icon " key={i}></i>);
  }
  for (let i = 0; i < Empty; i++) {
    stars.push(
      <i class="fa-regular fa-star-half-stroke star-icon " key={i}></i>
    );
  }
  console.log(props.image);
  return (
    <>
      <div className=" product-cart-mini me-lg-3 ">
        <div className="cardi ">
          <Link to={`/product/${props.id}  `}>
            <img
              src={`.${props.image}`}
              className="card-img img-fluid"
              alt={props.name}
              title={props.name}
            />
          </Link>
          <button className="heart-ico" onClick={likedHandler}>
            {liked ? (
              <i className="fa-solid fa-heart "></i>
            ) : (
              <i className="fa-regular fa-heart "></i>
            )}
          </button>
        </div>
        <div className=" d-flex justify-content-between cord mt-3">
          <h5 className="card-title-front">{props.title}</h5>
          <h5 className="card-text ">${props.price}</h5>
        </div>
        <div className=" gatag d-flex flex-column ">
          <h6 className="card-text  text-decoration-none" href="#">
            {props.miniDescription}
          </h6>
        </div>{" "}
        <div className=" d-flex mt-2  mt-lg-2 ">{stars}</div>
        <button className=" cart-btn mt-3 mt-lg-3">Add to cart</button>
      </div>
    </>
  );
}
