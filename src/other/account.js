import React from "react";
import Image from "../images/Avartar.jpg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  let name = localStorage.getItem("fname");
  let email = localStorage.getItem("email");
  const askingLogout = () => {
    Swal.fire({
      title: "Do you want to Logeout?",

      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
        HandleLogout();
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        navigate("/account");
      }
    });
  };

  const HandleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div class="container rounded account-cont mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              width="150px"
              src={Image}
              alt="Avatar"
            />
            <span class="font-weight-bold mt-2">{name}</span>
            <span class="email mt-2">{email}</span>
            <span>
              <button class="add-btn-logout" onClick={askingLogout}>
                Logout
              </button>
            </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6 group">
                <label class="labels"></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="first name"
                  value=""
                />
              </div>
              <div class="col-md-6">
                <label class="labels"></label>
                <input
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="surname"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels"></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter phone number"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels"></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 1"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels"></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 2"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels"></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 2"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels"></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 2"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels"></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 2"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels"> </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter email id"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels"></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="education"
                  value=""
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels"></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="country"
                  value=""
                />
              </div>
              <div class="col-md-6">
                <label class="labels"></label>
                <input
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="state"
                />
              </div>
            </div>
            <div class="mt-5 text-center">
              <button class="add-btn-save" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center experience">
              <span>Edit Experience</span>
              <span class="border px-3 p-1 add-experience">
                <i class="fa fa-plus"></i>&nbsp;Experience
              </span>
            </div>
            <br />
            <div class="col-md-12">
              <label class="labels"></label>
              <input
                type="text"
                class="form-control"
                placeholder="experience"
                value=""
              />
            </div>{" "}
            <br />
            <div class="col-md-12">
              <label class="labels"></label>
              <input
                type="text"
                class="form-control"
                placeholder="additional details"
                value=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
