import "./App.css";

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import Nav from "./components/Navbar";
import Home from "./mainpage/Home";
import Card from "./components/card";
import Product from "./product/product";
import Products from "./product/products";
import ProductNavbar from "./components/ProuductNavbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./other/about";
import Login from "./other/login";
import Signup from "./other/singup";
import Account from "./other/account";
import Icon from "./components/Icon";
export default function App() {
  let [darkmode, setDarkmode] = React.useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  React.useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkmode));
  }, [darkmode]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };
  }, []);

  // prettier-ignore
  let [Products, setProducts] = React.useState([
    {
      title: "Srhythm NC10",
      price: "$79.99",
      gatag: "5G 6GB/128GB 16Mp",
      image: 1,
      id: 1,
      stars: 5,
      shipping: "Free",
      isfav: false,
      brand: "Srhythm",
      color: "White",
    },
    {
      title: "TOZO T10",
      price: "$24.99",
      gatag: "Gaming",
      image: 2,
      id: 2,
      stars: 3,
      shipping: "$186",
      isfav: false,
      brand: "TOZO",
      color: "Black",
    },
    {
      title: "Galaxy Watch 5 Pro",
      price: "$399.99",
      gatag: "Gaming",
      image: 3,
      id: 3,
      stars: 4,
      shipping: "$56",
      isfav: false,
      brand: "Samsung",
      color: "Black",
    },
    {
      title: "T-Rex Pro",
      price: "$138.99",
      gatag: "Gaming",
      image: 4,
      id: 4,
      stars: 4,
      shipping: "$63",
      isfav: false,
      brand: "T-Rex",
      color: "Black",
    },
    {
      title: "Srhythm NC10",
      price: "$79.99",
      gatag: "Gaming",
      image: 1,
      id: 5,
      stars: 4,
      shipping: "$32",
      isfav: false,
      brand: "Srhythm",
      color: "White",
    },
  ]);
  // prettier-ignore-end

  let toggleFav = (id, isFav) => {
    let newProducts = Products.map((item) => {
      if (item.id === id) {
        item.isfav = !isFav;
      }
      return item;
    });
    setProducts(newProducts);
    console.log(Products);
  };

  //for hide element for specific route
  let hideloc = useLocation();

  let hide = hideloc.pathname === "/account" || hideloc.pathname === "/signup";

  function updateDarkMode(newValue) {
    setDarkmode(newValue);
  }
  return (
    <main className={`app ${darkmode ? "darkmode" : ""}`}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {!hide && <Nav updateDarkMode={updateDarkMode} />}{" "}
              <Home
                updateDarkMode={darkmode}
                toggleFav={toggleFav}
                isfav={Products.isfav}
                Products={Products}
              />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <ProductNavbar updateDarkMode={updateDarkMode} />
              <Product />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </main>
  );
}
