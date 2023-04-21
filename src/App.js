import "./App.css";

import React, { Fragment } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import Loading from "./other/Loading";
import Nav from "./components/Navbar";
import Home from "./mainpage/Home";
import Favorite from "./Favorites/Favorites";
import Product from "./product/product";
import ProductsPage from "./product/products";
import ProductNavbar from "./components/ProuductNavbar";
import { Route, Routes, useLocation } from "react-router-dom";
import EmailVerify from "./other/singup/EmailVerify";
import About from "./other/about";
import Upload from "./other/upload";
import Signup from "./other/singup/signup";
import Login from "./other/singup/login";
import Account from "./other/account";

export default function App() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      }, []);
  });
  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  let [darkmode, setDarkmode] = React.useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  React.useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkmode));
  }, [darkmode]);

  // prettier-ignore
  let [Products, setProducts] = React.useState([
    {
      title: "Samsung galaxy A53 5G",
      price: "$79.99",
      gatag: "5G 6GB/128GB 16Mp",
      image: 1,
      id: "1",
      stars: 5,
      shipping: "Free",
      isfav: false,
      brand: "Srhythm",
      color: "White",
      size: "xl",
      weight: "50g",
      dimensions: "15x20",
      description:
        "this is samsung A57 2019 was created by samsung db beusdbhjcksjqvjbjkseqhviuesjbvu ",
    },
    {
      title: "TOZO T10",
      price: "$24.99",
      gatag: "5G 12GB/512GB 200Mp ",
      image: 2,
      id: 2,
      stars: 3,
      shipping: "$186",
      isfav: false,
      brand: "TOZO",
      color: "Black",
      size: "xl",
      weight: "50g",
      dimensions: "15x20",
      description:
        "this is samsung A57 2019 was created by samsung db beusdbhjcksjqvjbjkseqhviuesjbvu ",
    },
    {
      title: "Galaxy Watch 5 Pro",
      price: "$399.99",
      gatag: "5G 8GB/256GB 64Mp",
      image: 3,
      id: 3,
      stars: 4,
      shipping: "$56",
      isfav: false,
      brand: "Samsung",
      color: "Black",
      size: "xl",
      weight: "50g",
      dimensions: "15x20",
      description:
        "this is samsung A57 2019 was created by samsung db beusdbhjcksjqvjbjkseqhviuesjbvu ",
    },
    {
      title: "T-Rex Pro",
      price: "$138.99",
      gatag: "5G 8GB/256GB  60Mp ",
      image: 4,
      id: 4,
      stars: 4,
      shipping: "$63",
      isfav: false,
      brand: "T-Rex",
      color: "Black",
      size: "xl",
      weight: "50g",
      dimensions: "15x20",
      description:
        "this is samsung A57 2019 was created by samsung db beusdbhjcksjqvjbjkseqhviuesjbvu ",
    },
    {
      title: "Srhythm NC10",
      price: "$79.99",
      gatag: "5G 8GB/256GB  60Mp ",
      image: 1,
      id: 5,
      stars: 4,
      shipping: "$32",
      isfav: false,
      brand: "Srhythm",
      color: "White",
      size: "xl",
      weight: "50g",
      dimensions: "15x20",
      description:
        "this is samsung A57 2019 was created by samsung db beusdbhjcksjqvjbjkseqhviuesjbvu ",
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Fragment>
          {" "}
          <ProductNavbar
            updateDarkMode={updateDarkMode}
            isLoggedIn={isLoggedIn}
          />{" "}
          <Loading />{" "}
        </Fragment>
      ) : (
        <main className={`app ${darkmode ? "darkmode" : ""}`}>
          <Routes>
            <Route
              path="/"
              element={
                <Fragment>
                  {" "}
                  {!hide && (
                    <Nav
                      updateDarkMode={updateDarkMode}
                      isLoggedIn={isLoggedIn}
                    />
                  )}{" "}
                  <Home
                    updateDarkMode={darkmode}
                    toggleFav={toggleFav}
                    isfav={Products.isfav}
                    Products={Products}
                    backendData={backendData}
                    isLoggedIn={isLoggedIn}
                  />
                </Fragment>
              }
            />
            <Route
              path="/products"
              element={
                <Fragment>
                  {" "}
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <ProductsPage
                    updateDarkMode={darkmode}
                    toggleFav={toggleFav}
                    isfav={Products.isfav}
                    Products={Products}
                    isLoggedIn={isLoggedIn}
                  />
                </Fragment>
              }
            />
            <Route
              path="/product/:id"
              element={
                <>
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />

                  <Product
                    updateDarkMode={darkmode}
                    Products={Products}
                    isLoggedIn={isLoggedIn}
                  />
                </>
              }
            />
            <Route
              path="/signup"
              element={
                <>
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <Signup
                    updateDarkMode={darkmode}
                    toggleFav={toggleFav}
                    isfav={Products.isfav}
                    Products={Products}
                    isLoggedIn={isLoggedIn}
                  />
                </>
              }
            />
            <Route
              path="/users/:id/verify/:token"
              element={
                <>
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />

                  <EmailVerify
                    updateDarkMode={darkmode}
                    isLoggedIn={isLoggedIn}
                  />
                </>
              }
            />
            <Route
              path="/about-us"
              element={
                <>
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />

                  <About updateDarkMode={darkmode} isLoggedIn={isLoggedIn} />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <Login
                    updateDarkMode={darkmode}
                    toggleFav={toggleFav}
                    isfav={Products.isfav}
                    Products={Products}
                    isLoggedIn={isLoggedIn}
                  />
                </>
              }
            />
            <Route
              path="/account"
              element={
                <>
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <Account
                    updateDarkMode={darkmode}
                    toggleFav={toggleFav}
                    isfav={Products.isfav}
                    Products={Products}
                    isLoggedIn={isLoggedIn}
                  />
                </>
              }
            />
            <Route
              path="/upload"
              element={
                <>
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <Upload updateDarkMode={darkmode} isLoggedIn={isLoggedIn} />
                </>
              }
            />
            <Route
              path="/favorites"
              element={
                <>
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <Favorite updateDarkMode={darkmode} isLoggedIn={isLoggedIn} />
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      )}{" "}
    </Fragment>
  );
}
