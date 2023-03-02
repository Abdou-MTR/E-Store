import React from "react";
import CardProduct from "../components/card";

export default function MainProducts(props) {
  const products = props.Products;

  return (
    <div className="container ">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-6 col-sm-6 col-lg-3 mt-5">
            <CardProduct
              id={product.id}
              title={product.title}
              price={product.price}
              gatag={product.gatag}
              image={product.image}
              stars={product.stars}
              shipping={product.shipping}
              isfav={product.isfav}
              brand={product.brand}
              color={product.color}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
