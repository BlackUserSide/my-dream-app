import React from "react";
import { TextComposition } from "./MainComposition/TextComposition";
import pres1 from "../../img/pres1.png";
import pres2 from "../../img/pres2.png";
import pres3 from "../../img/pres3.png";
import scrollIcon from "../../img/scroll.svg";
export const MainContent = () => {
  return (
    <section className="main-content">
      <div className="bg-opacity"></div>
      <TextComposition />
      <img src={pres1} className="img-clips-1" alt="" />
      <img src={pres2} className="img-clips-2" alt="" />
      <img src={pres3} className="img-clips-3" alt="" />
      {/* <img src={scrollIcon} alt="" className="scroll-icon" /> */}
    </section>
  );
};
