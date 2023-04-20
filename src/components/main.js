import React from "react";

import Icon from "../components/Icon";
import market from "../icons/Market.png";
import marketDarkmode from "../icons/Market-Darkmode.png";
export default function Meme(props) {
  return (
    //create a input field
    <main class="d-flex flex-column">
      {" "}
      <div class="d-flex flex-column flex-md-column flex-lg-row ">
        <div>
          <div className="Landing-Title ">
            {" "}
            <p
              className="page-header-title ms-lg-5 align-items-center"
              id="Title"
            >
              <span className="blue">All</span> you need
              <br />
              <span className="orange">in</span> your life is
              <br />
              <span className="blue">one</span> website
            </p>
          </div>
          <div
            className="Landing-description"
            class="d-flex flex-column justify-content-sm-center mb-5 "
          >
            <div class="d-flex justify-content-sm-center  justify-content-lg-start ">
              {" "}
              <p
                class="mb-3 ms-lg-5 ms-3 justify-content-center justify-content-lg-start col-lg-10 "
                id="description"
              >
                <br /> Free shipping on millions of items, Get the best of
                Shopping and Entertainment with our website. Enjoy low prices
                and great deals on sales days.
              </p>
            </div>

            <div class=" ms-lg-5 d-flex flex-row  justify-content-center justify-content-lg-start  ">
              <button id="More" href="#" class="me-2  ">
                More about us
              </button>
              <button className=" Discover-Products" href="#">
                Discover Products
              </button>
            </div>
          </div>
        </div>
        <div className="Market-Image d-flex col-8 col-md-6 col-lg-6 col-sm-12 justify-content-center">
          <img
            src={props.updateDarkMode ? marketDarkmode : market}
            alt="..."
            class="img-fluid"
          />
        </div>
      </div>
      <div>
        <h1 class="ms-4 mt-4">Discover Our Newest Products</h1>
      </div>
    </main>
  );
}
