import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";
import logoDarkmode from "../images/Logo-Darkmode.svg";
import axios from "axios";
import Swal from "sweetalert2";

export default function MainProducts(props) {
  const [name, setName] = useState("");
  const [miniDescription, setMiniDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [weight, setWeight] = useState("");
  const [size, setSize] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [shippingFees, setShippingFees] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "miniDescription":
        setMiniDescription(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "rating":
        setRating(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "brand":
        setBrand(value);
        break;
      case "weight":
        setWeight(value);
        break;
      case "size":
        setSize(value);
        break;
      case "dimensions":
        setDimensions(value);
        break;
      case "shippingFees":
        setShippingFees(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "image":
        setImage(event.target.files[0]);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("productName", name);
    formData.append("miniDescription", miniDescription);
    formData.append("category", category);
    formData.append("rating", rating);
    formData.append("price", price);
    formData.append("brand", brand);
    formData.append("weight", weight);
    formData.append("size", size);
    formData.append("dimensions", dimensions);
    formData.append("shippingFees", shippingFees);
    formData.append("description", description);
    formData.append("productImage", image);
    try {
      await axios.post("http://localhost:5000/upload/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      Swal.fire({
        icon: "success",
        title: "Product added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      setName("");
      setMiniDescription("");
      setCategory("");
      setRating("");
      setPrice("");
      setBrand("");
      setWeight("");
      setSize("");
      setDimensions("");
      setShippingFees("");
      setDescription("");
      setImage(null);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.error(error);
    }
  };
  console.log(formData);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-9 col-sm-12">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <Link to="/">
              <img
                src={props.darkmode ? logoDarkmode : logo}
                alt="Logo"
                className="logo"
              />
            </Link>
            <h2>Add Product</h2>
            <div className="theme-switch-wrapper">
              <label className="theme-switch" htmlFor="checkbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  onChange={props.handleDarkmodeChange}
                  checked={props.darkmode}
                />
                <div className="slider round"></div>
              </label>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="miniDescription">Mini Description</label>
              <textarea
                className="form-control"
                id="miniDescription"
                name="miniDescription"
                rows="2"
                value={miniDescription}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={category}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <input
                type="number"
                className="form-control"
                id="rating"
                name="rating"
                min="1"
                max="5"
                step="0.1"
                value={rating}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                min="1"
                step="0.01"
                value={price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                className="form-control"
                id="brand"
                name="brand"
                value={brand}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                className="form-control"
                id="weight"
                name="weight"
                value={weight}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="size">Size</label>
              <input
                type="text"
                className="form-control"
                id="size"
                name="size"
                value={size}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dimensions">Dimensions</label>
              <input
                type="text"
                className="form-control"
                id="dimensions"
                name="dimensions"
                value={dimensions}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="shippingFees">Shipping Fees</label>
              <input
                type="number"
                className="form-control"
                id="shippingFees"
                name="shippingFees"
                min="0"
                step="0.01"
                value={shippingFees}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="5"
                value={description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                className="form-control-file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
