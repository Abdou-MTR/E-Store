import React from "react";
import logo from "../images/Logo.svg";
import logoDarkmode from "../images/Logo-Darkmode.svg";
import icons from "./Icon.js";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const [darkmode, setDarkMode] = React.useState(
    localStorage.getItem("darkmode") === "true"
  );
  let isLoggedIn = localStorage.getItem("token");
  function darkmodeChanger() {
    const newDarkmode = !darkmode;
    setDarkMode(newDarkmode);
    localStorage.setItem("darkmode", newDarkmode.toString());
    props.updateDarkMode(newDarkmode);
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg  ">
        <div class="container-fluid">
          <div class=" col-6 col-lg-2 ">
            <Link to={`/`}>
              <img
                src={darkmode ? logoDarkmode : logo}
                alt="logo"
                id="logo"
                className="img-fluid"
              />{" "}
            </Link>
          </div>{" "}
          <div className="main-icons  ms-sm-3 ms-lg-4   ">
            {isLoggedIn ? (
              <Link to={`/account`} className="me-2 me-lg-4">
                {" "}
                <img
                  src={darkmode ? icons.profileDarkmode : icons.profile}
                  alt="profile"
                />
              </Link>
            ) : (
              <Link to={`/signup`} className="me-2 me-lg-4">
                <img
                  src={darkmode ? icons.profileDarkmode : icons.profile}
                  alt="profile"
                />
              </Link>
            )}
            <Link to="/favorites" className="me-2 me-lg-4">
              {" "}
              <img
                src={darkmode ? icons.favoriteDarkmode : icons.favorite}
                alt="favorite"
              />
            </Link>
            <Link to="/bag" className="me-2 me-lg-4">
              <img src={darkmode ? icons.bagDarkmode : icons.bag} alt="bag" />
            </Link>

            <div className="Dark-mode ">
              <img
                src={darkmode ? icons.Light : icons.Night}
                alt="Night"
                onClick={darkmodeChanger}
              />
            </div>
          </div>
          <div class="input-wrapper col-10 col-sm-12 mt-lg-0 mt-sm-4 col-lg-4 col-xl-3 col-xxl-3 col-md-11 col-xs-1">
            <img src={icons.search} alt="search" />
            <input
              type="text"
              placeholder="Search for products"
              class="form-control form-control-lg "
            />
          </div>
          <button
            class="navbar-toggler mt-sm-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              src={darkmode ? icons.toggleButtonDarkmode : icons.toggleButton}
              alt="toggleButton"
              className="toggleButton"
            />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-1 mb-2 mb-lg-0">
              <Link to={`/products`}>
                <li class="nav-item ">
                  <a
                    class="nav-link active "
                    id="navEelment"
                    aria-current="page"
                    href="#"
                  >
                    Products
                  </a>{" "}
                </li>
              </Link>

              <li class="nav-item">
                <a
                  class="nav-link active "
                  id="navEelment"
                  aria-current="page"
                  href="#"
                >
                  Categories
                </a>
              </li>
              <Link to="/about-us">
                {" "}
                <li class="nav-item">
                  <a
                    class="nav-link active  "
                    id="navEelment"
                    aria-current="page"
                    href="#"
                  >
                    Contact-us
                  </a>
                </li>
              </Link>

              <Link to="/about-us">
                {" "}
                <li class="nav-item">
                  <a
                    class="nav-link active "
                    id="navEelment"
                    aria-current="page"
                    href="#"
                  >
                    About-us
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
