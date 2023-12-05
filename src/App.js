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
import Bag from "./Bag/Bag";

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

  // prettier-ignore-end


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
                  
                  
                    isLoggedIn={isLoggedIn}
                  />
                </Fragment>
              }
            />
            <Route
              path="/product/:id"
              element={
                <Fragment>
                  {" "}
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <Product updateDarkMode={darkmode} isLoggedIn={isLoggedIn} />
                </Fragment>
              }
            />
            <Route
              path="/signup"
              element={
                <Fragment>
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <Signup
                    updateDarkMode={darkmode}
                  
                    isLoggedIn={isLoggedIn}
                  />
                </Fragment>
              }
            />
            <Route
              path="/users/:id/verify/:token"
              element={
                <Fragment>
                  {" "}
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <EmailVerify
                    updateDarkMode={darkmode}
                    isLoggedIn={isLoggedIn}
                  />
                </Fragment>
              }
            />
            <Route
              path="/Bag"
              element={
                <Fragment>
                  {" "}
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <Bag updateDarkMode={darkmode} isLoggedIn={isLoggedIn} />
                </Fragment>
              }
            />
            <Route
              path="/about-us"
              element={
                <Fragment>
                  {" "}
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <About updateDarkMode={darkmode} isLoggedIn={isLoggedIn} />
                </Fragment>
              }
            />
            <Route
              path="/login"
              element={
                <Fragment>
                  {" "}
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <Login
                    updateDarkMode={darkmode}
                 
                    isLoggedIn={isLoggedIn}
                  />
                </Fragment>
              }
            />
            <Route
              path="/account"
              element={
                <Fragment>
                  {" "}
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <Account
                    updateDarkMode={darkmode}
                 
                    isLoggedIn={isLoggedIn}
                  />
                </Fragment>
              }
            />
            <Route
              path="/upload"
              element={
                <Fragment>
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <Upload updateDarkMode={darkmode} isLoggedIn={isLoggedIn} />
                </Fragment>
              }
            />
            <Route
              path="/favorites"
              element={
                <Fragment>
                  {" "}
                  <ProductNavbar
                    updateDarkMode={updateDarkMode}
                    isLoggedIn={isLoggedIn}
                  />
                  <Favorite updateDarkMode={darkmode} isLoggedIn={isLoggedIn} />
                </Fragment>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      )}{" "}
    </Fragment>
  );
}
