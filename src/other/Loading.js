import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="Loading">
      {" "}
      <div class="rocket">
        <div class="rocket-body">
          <div class="body"></div>
          <div class="fin fin-left"></div>
          <div class="fin fin-right"></div>
          <div class="window"></div>
        </div>
        <div class="exhaust-flame"></div>
        <ul class="exhaust-fumes">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul class="star">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>{" "}
      <div className="spinner mt-5">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
};

export default Loading;
