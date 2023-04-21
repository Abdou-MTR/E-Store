import React from "react";
import image1 from "../images/image 1.png";
import image2 from "../images/image 2.png";
import image3 from "../images/image 3.png";
import image4 from "../images/image 4.png";

import "../App.css";
import { Link } from "react-router-dom";
export default function CardProduct(props) {
  let [liked, setLiked] = React.useState(props.isfav);

  let likedHandler = () => {
    setLiked(!liked);
    props.toggleFav(props.id, liked);
  };

  let nbrstars = props.stars;
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

  return (
    <>
      <div className=" product-cart-mini me-lg-3 ">
        <div className="cardi ">
          <Link to={`/product/${props.id}  `}>
            <img
              src={
                props.image === 1
                  ? image1
                  : props.image === 2
                  ? image2
                  : props.image === 3
                  ? image3
                  : props.image === 4
                  ? image4
                  : null
              }
              className="card-img img-fluid"
              alt={props.title}
              title={props.title}
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
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-price">{props.price}</h5>
        </div>
        <div className=" gatag d-flex flex-column ">
          <h6 className="card-text  text-decoration-none" href="#">
            {props.gatag}
          </h6>
          <h6 className="card-text  text-decoration-none" href="#">
            {props.gatag}
          </h6>
        </div>{" "}
        <div className=" d-flex mt-2  mt-lg-3 ">{stars}</div>
        <button className=" cart-btn mt-3 mt-lg-3">Add to cart</button>
      </div>
    </>
  );
}
