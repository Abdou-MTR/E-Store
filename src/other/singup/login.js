import React from "react";

import logo from "../../images/Logo.svg";
import logoDarkmode from "../../images/Logo-Darkmode.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import login from "../../images/Login.svg";
export default function Signin(props) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();

  const HandleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="d-flex flex-row row-cols-md-2 login signop row-cols-1 m-0  ">
      <div className=" col firstpart d-sm-none d-lg-flex   ">
        <img src={login} alt="login" className="img-fluid" />
        <button>Name</button>
      </div>{" "}
      <div className=" col secondpart mt-4 ">
        <div className="container text-center">
          <Link to="/">
            <img
              src={props.updateDarkMode ? logoDarkmode : logo}
              alt="logo"
              className="mb-4 text-center mt-4 img-fluid "
            />
          </Link>

          <h2>Sign in</h2>

          <h6 className="mb-5">Hey there, welcome back</h6>
          <div className="container">
            <form onSubmit={HandleSubmit}>
              <div className="group justify-content-center">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={HandleChange}
                  required
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label htmlFor="email">Email</label>
              </div>
              <div className="group ">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={HandleChange}
                  required
                  minLength="4"
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label htmlFor="password">Password</label>
              </div>

              {error && <div>{error}</div>}
              <button type="submit" className=" add-btn-logout">
                Signin
              </button>
            </form>
          </div>

          <p>
            By sign in here you , you agree to our{" "}
            <a href="##">Terms of Service</a> and{" "}
            <a href="##">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
