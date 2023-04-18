import Main from "../components/main";
import React from "react";
import MainProducts from "./mainproducts";
export default function Home(props) {
  return (
    //create a input field
    <>
      <Main updateDarkMode={props.updateDarkMode} />
      <MainProducts
        toggleFav={props.toggleFav}
        isfav={props.isfav}
        Products={props.Products}
      />
    </>
  );
}
