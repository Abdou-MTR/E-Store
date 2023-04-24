import React, { useState, useEffect } from "react";
import CardProduct from "../components/card";

export default function MainProducts(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container ">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-6 col-sm-6 col-lg-3 mt-5">
            <CardProduct
              id={product.id}
              title={product.name}
              price={product.price}
              miniDescription={product.miniDescription}
              category={product.category}
              image={product.image}
              rating={product.rating}
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
