import React from "react";
import { ReactComponent as Return } from "../../icons/bag.svg";
import logo from "../../images/Logo.svg";
import logoDarkmode from "../../images/Logo-Darkmode.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import sign from "../../images/Sign.svg";

export default function Signup(props) {
  const [msg, setMsg] = useState("");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConf: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();
  const NavigateTo = () => {
    navigate("/login");
  };

  const HandleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users";
      const { data: res } = await axios.post(url, data);
      setMsg(res.message);

      localStorage.setItem("email", data.email);
      localStorage.setItem("fname", data.firstName);
      localStorage.setItem("lname", data.lastName);

      Swal.fire({
        title: "Verification email sent ",
        icon: "success",
        confirmButtonText: "Ok",
      });
      navigate("/");

      console.log(res.message);
      console.log(msg);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        console.log(error);
      }
    }
    if (data.passwordConf !== data.password) {
      navigate("/singup");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter the same password!",
      });
    }
  };

  return (
    <div className=" row row-cols-md-2 login signop row-cols-1 m-0 justify-content-center ">
      <div className=" col secondpart mt-4 ">
        <div className="container text-center">
          <Link to="/">
            <img
              src={props.updateDarkMode ? logoDarkmode : logo}
              alt="logo"
              className="mb-4 text-center mt-4 img-fluid "
            />
          </Link>
          <h2>Sign Up</h2>

          <h6 className="mb-5">Hey there, welcome back</h6>
          <div className="container">
            <form onSubmit={HandleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="group">
                    <input
                      type="text"
                      id="fname"
                      name="firstName"
                      value={data.firstName}
                      onChange={HandleChange}
                      required
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label htmlFor="First Name">First Name</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="group">
                    <input
                      type="text"
                      id="lname"
                      name="lastName"
                      onChange={HandleChange}
                      value={data.lastName}
                      required
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label htmlFor="Last Name">Last Name</label>
                  </div>
                </div>
              </div>
              <div className="group">
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
              <div className="group">
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
              <div className="group">
                <input
                  type="password"
                  id="passwordConf"
                  name="passwordConf"
                  value={data.passwordConf}
                  onChange={HandleChange}
                  required
                  minLength="4"
                />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label htmlFor="passwordconf">Confirm Password</label>
              </div>

              {error && <div>{error}</div>}
              {msg && <div>{msg}</div>}

              <button type="submit" className=" add-btn-logout">
                Sign Up
              </button>
            </form>
          </div>

          <p className="termText">
            Do you have an account{"   "}
            <a href="##" className="term-sing ms-2" onClick={NavigateTo}>
              Singin
            </a>
            <br />
            By sign in here you , you agree to our{" "}
            <a href="##" className="term">
              Terms of Service
            </a>{" "}
            and{"   "}
            <a href="##" className="term">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
      <div className=" col firstpart d-sm-none d-lg-flex  ">
        <img src={sign} alt="login" className="img-fluid d-lg-flex d-sm-none" />
        <button>
          <Return />
        </button>
      </div>
    </div>
  );
}
