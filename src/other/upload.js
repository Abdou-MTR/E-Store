import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";
import logoDarkmode from "../images/Logo-Darkmode.svg";
import axios from "axios";
import Swal from "sweetalert2";

export default function MainProducts(props) {
  const [productData, setProductData] = useState({
    name: "",
    miniDescription: "",
    category: "",
    rating: "",
    price: "",
    brand: "",
    weight: "",
    size: "",
    color: "",
    dimensions: "",
    shippingFees: "",
    description: "",
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData({ ...productData, [name]: value });
  };
  // const handleImageChange = (event) => {
  //   setProductData({ ...productData, image: event.target.files[0] });
  // };
  const handleImageChange = (event) => {
    setProductData({
      ...productData,
      image: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("miniDescription", productData.miniDescription);
    formData.append("category", productData.category);
    formData.append("rating", productData.rating);
    formData.append("price", productData.price);
    formData.append("brand", productData.brand);
    formData.append("weight", productData.weight);
    formData.append("size", productData.size);
    formData.append("color", productData.color);
    formData.append("dimensions", productData.dimensions);
    formData.append("shippingFees", productData.shippingFees);
    formData.append("description", productData.description);
    formData.append("image", productData.image);
    try {
      await axios.post("http://localhost:5000/upload/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(formData);

      Swal.fire({
        icon: "success",
        title: "Product uploaded!",
        showConfirmButton: true,
      });
      // clear form data
      setProductData({
        name: "",
        miniDescription: "",
        category: "",
        rating: "",
        price: "",
        brand: "",
        weight: "",
        size: "",
        color: "",
        dimensions: "",
        shippingFees: "",
        description: "",
        image: "",
      });
    } catch (error) {
      console.log(formData);

      console.log(error);
      alert("Failed to upload product");
    }
  };
  console.log(productData);

  return (
    <main>
      <div className="d-flex justify-content-center ">
        <div className="d-flex flex-column upload">
          <Link to="/">
            <img
              src={props.updateDarkMode ? logoDarkmode : logo}
              alt="logo"
              className="mb-4 text-center mt-4 img-fluid "
            />
          </Link>
          <h2>Upload Product</h2>
          mb-5 up-ad">Hey there, welcome back Admin</h6>
        </div>
      </div>
      <div className="Product-upload">
        <form
          method="POST"
          action="#"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="group">
            <input
              type="text"
              required="required"
              name="name"
              onChange={handleInputChange}
              value={productData.name}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor="name">Product Name</label>
          </div>
          <div class="group">
            <input
              type="text"
              required="required"
              name="miniDescription"
              value={productData.miniDescription}
              onChange={handleInputChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor="miniDescription">Product Mini Description</label>
          </div>

          <div className="group">
            <select
              name="category"
              required="required"
              value={productData.category}
              onChange={handleInputChange}
            >
              <option value="">--Select Categorie--</option>
              <option value="Keyboards">Keyboards</option>
              <option value="Smartphones">Smartphones</option>
              <option value="Graphic cards">Graphic cards</option>
              <option value="Monitors">Monitors</option>
            </select>
          </div>
          <div class="group">
            <input
              required="required"
              name="rating"
              type="number"
              id="rating"
              min="0"
              max="5"
              step="0.1"
              value={productData.rating}
              onChange={handleInputChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor="rating">Product Rating</label>
          </div>
          <div class="group">
            <input
              type="number"
              required="required"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor="price">Product Price</label>
          </div>
          <div class="group">
            <input
              type="text"
              required="required"
              name="brand"
              value={productData.brand}
              onChange={handleInputChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor="brand">Product Brand</label>
          </div>
          <div class="group">
            <input
              type="number"
              required="required"
              name="weight"
              value={productData.weight}
              onChange={handleInputChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor="weight">Product Weight</label>
          </div>
          <div class="group">
            <input
              type="text"
              required="required"
              name="color"
              value={productData.color}
              onChange={handleInputChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor="color">Product color</label>
          </div>
          <div class="group">
            <input
              type="text"
              required="required"
              name="size"
              value={productData.size}
              onChange={handleInputChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor="size">Product Size</label>
          </div>
          <div class="group">
            <input
              type="text"
              required="required"
              name="dimensions"
              value={productData.dimensions}
              onChange={handleInputChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor="dimensions">Product dimensions</label>
          </div>
          <div class="group">
            <input
              type="text"
              required="required"
              name="shippingFees"
              value={productData.shippingFees}
              onChange={handleInputChange}
            />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor="shippingFees">Product Shipping fees</label>
          </div>

          <div class="group">
            <textarea
              type="textarea"
              rows="5"
              required="required"
              name="description"
              value={productData.description}
              onChange={handleInputChange}
            ></textarea>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label htmlFor="description">Product Description</label>
          </div>
          <div className="form-group">
            <label htmlFor="image"></label>
            <input
              type="file"
              className="form-control-file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </div>
          <button class="add-btn" type="submit" name="submit">
            Upload Product
          </button>
        </form>
      </div>
    </main>
  );
}
