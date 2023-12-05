import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import icons from "../components/Icon";
import Product from "../components/Product";
export default function OneProduct(props) {
  const [products, setProducts] = useState([]);

  const { id } = useParams();
  console.log("id is", id);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const product = products.find((item) => {
    console.log("item id is", item.id);

    return item.id == id;
  });

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    //create a input field
    <main class="d-flex flex-column ms-3">
      <div>
        {" "}
        <div class="d-flex mb-3 path P-word fw-light">
          <div>
            {" "}
            Product /<a> {product.category}</a>/ <a>{product.brand} </a> /
            <span
              className={!props.updateDarkMode ? "text-black" : "text-white"}
            >
              {product.title}
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-between  ">
          <div>
            <ul class="d-lg-flex flex-row list-unstyled d-sm-column ">
              <li class="me-lg-3 me-md-3 mb-sm-2 fw-bold listCat">
                <a
                  href="#"
                  className="text-decoration-none Sidebars display-sm-6"
                >
                  New
                </a>
              </li>
              <li class="me-lg-3 me-md-3 mb-sm-2 listCat ">
                <a href="#" className="text-decoration-none Sidebars">
                  Smartphones
                </a>
              </li>
              <li class="me-lg-3 me-md-3 mb-sm-2 listCat ">
                <a href="#" className="text-decoration-none Sidebars">
                  AirPods
                </a>
              </li>
              <li class="me-lg-3 me-md-3 mb-sm-2 listCat  ">
                <a href="#" className="text-decoration-none Sidebars">
                  Usb-C
                </a>
              </li>
              <li class="me-3 mb-sm-2 listCat text-decoration-none">
                <a href="#" className="text-decoration-none Sidebars ">
                  Others..
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3">
            {" "}
            <div class="input-wrapper mb-3 me-3 search-products">
              <img src={icons.search} alt="search" />
              <input
                type="text"
                placeholder="Search for products"
                class="form-control form-control-lg "
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 d-flex flex-row">
        <div class="d-md-flex d-lg-flex d-none">
          <ul class="list-unstyled d-column ">
            <li class="me-lg-3 me-md-3 mb-sm-2  fw-bold listCat-1">
              <a href="#" className="text-decoration-none Sidebars ">
                Top Salled
              </a>
            </li>
            <li class="me-lg-3 me-md-3 mb-sm-2 listCat-2">
              <a href="#" className="text-decoration-none Sidebars ">
                Newest
              </a>
            </li>
            <li class="me-lg-3 me-md-3 mb-sm-2 listCat-2 ">
              <a href="#" className="text-decoration-none Sidebars ">
                Most Liked{" "}
              </a>
            </li>
          </ul>
        </div>

        <div class="container">
          <>
            {" "}
            <Product
              toggleFav={props.toggleFav}
              isfav={props.isfav}
              Products={props.Products}
            />
          </>
        </div>
      </div>
    </main>
  );
}
