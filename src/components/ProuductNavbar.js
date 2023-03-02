import React from "react";
import logo from "../images/Logo.svg";
import logoDarkmode from "../images/Logo-Darkmode.svg";
import icons from "./Icon.js";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const [darkmode, setDarkMode] = React.useState(
    localStorage.getItem("darkmode") === "true"
  );

  function darkmodeChanger() {
    const newDarkmode = !darkmode;
    setDarkMode(newDarkmode);
    localStorage.setItem("darkmode", newDarkmode.toString());
    props.updateDarkMode(newDarkmode);
    window.location.reload();
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg  ">
        <div class="container-fluid">
          <div class=" col-6 col-lg-2 ">
            {" "}
            <img
              src={darkmode ? logoDarkmode : logo}
              alt="logo"
              id="logo"
              className="img-fluid"
            />
          </div>{" "}
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
            </ul>

            <div className="main-icons-Nav  ms-sm-3 ms-lg-2 justify-content-md-start justify-content-lg-end  ">
              <div class="d-flex flex-row">
                {" "}
                <img
                  src={darkmode ? icons.profileDarkmode : icons.profile}
                  alt="profile"
                />
                <a
                  class="icon-text  "
                  id="navEelment"
                  aria-current="page"
                  href="#"
                >
                  My account
                </a>
              </div>

              <div class="d-flex flex-row">
                {" "}
                <img
                  src={darkmode ? icons.favoriteDarkmode : icons.favorite}
                  alt="favorite"
                />
                <a
                  class="icon-text  "
                  id="navEelment"
                  aria-current="page"
                  href="#"
                >
                  Favorites
                </a>
              </div>

              <div class="d-flex flex-row">
                {" "}
                <img src={darkmode ? icons.bagDarkmode : icons.bag} alt="bag" />
                <a
                  class="icon-text  "
                  id="navEelment"
                  aria-current="page"
                  href="#"
                >
                  Bag
                </a>
              </div>

              <div className="Dark-mode-Nav ">
                <img
                  src={darkmode ? icons.Light : icons.Night}
                  alt="Night"
                  onClick={darkmodeChanger}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
