import React from "react";
import image1 from "../images/image 1.png";
import image2 from "../images/image 2.png";
import image3 from "../images/image 3.png";
import image4 from "../images/image 4.png";
import "../App.css";

import { useParams } from "react-router-dom";
export default function Product(props) {
  const { id } = useParams();
  const product = props.Products.find((item) => {
    console.log(item.id, id);
    return item.id == id;
  });

  if (!product) {
    return <div>Product not found</div>;
  }
  console.log(product.price);
  console.log(product.brand);
  console.log(product.title);
  console.log(product.gatag);
  console.log(product.shipping);
  console.log(product.size);
  console.log(product.dimensions);
  console.log(product.weight);
  console.log(product.color);
  console.log(product.image);

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = React.useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };

    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  let nbrstars = product.stars;
  let stars = [];
  for (let i = 0; i < nbrstars; i++) {
    stars.push(<i className="fa-solid fa-star star-icon " key={i}></i>);
  }
  /*let image = `..${product.image}`;*/

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 p-5  ">
        <div className="col">
          <div className=" mb-4 cardono ">
            <img
              src={
                product.id == 1
                  ? image1
                  : product.id == 2
                  ? image2
                  : product.id == 3
                  ? image3
                  : product.id == 4
                  ? image4
                  : null
              }
              className="card-img img-fluid"
              alt={props.title}
              title={props.title}
            />
          </div>
        </div>

        <div className="col mb-4 pe-md-5 ps-md-5 ">
          <h4 className="card-title mb-2 ">{product.title}</h4>
          <h5 className="card-price">{product.price}</h5>
          <h6 classname="shipping">
            {`${product.shipping} Import Fees Deposit to Algeria`}{" "}
          </h6>
          <div className=" d-flex mt-1 mb-2 ">
            {" "}
            <div className="me-2">
              <p>5/5</p>
            </div>{" "}
            <div>{stars}</div>
          </div>

          <div class="  d-flex flex-row ">
            <button className="size me-2" href="#">
              <h3>Medium</h3>
              <p>120 by 18inches</p>
            </button>
            <button className="size" href="#">
              <h3>Small</h3>
              <p>150 by 18inches</p>
            </button>
          </div>
          <div className="Details-Span mt-2">
            <a className=" Details" href="">
              See more details
            </a>
            <div className="row mt-2 ">
              <div className=" mt-1">
                <div className="d-flex flex-row info">
                  <h6 className="card-info">Brand: </h6> <p>{product.brand}</p>
                </div>
                <div className="d-flex flex-row info">
                  <h6 className="card-info">Model:</h6>
                  <p>{product.title}</p>
                </div>
                <div className="d-flex flex-row info">
                  <h6 className="card-info">Color: </h6>
                  <p> {product.color}</p>
                </div>

                <div className="d-flex flex-row info">
                  <h6 className="card-info">Weight: </h6>
                  <p>{product.weight}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column mt-4">
            <button id="add-to-Bag">Add to Bag</button>
            <button classname=" mt-2" id="add-to-Wishlist">
              Add to Wishlist{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
