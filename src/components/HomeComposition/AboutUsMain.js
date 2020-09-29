import React from "react";
import img from "../../img/bg2.png";
import { AboutText } from "./AboutComposition/AboutText";
export const AboutUsMain = () => {
  return (
    <section className="about-us-main">
      <div className="img-wrapper">
        <img src={img} alt="" />
        <h1 className="h1">О нас</h1>
      </div>
      <AboutText />
    </section>
  );
};
