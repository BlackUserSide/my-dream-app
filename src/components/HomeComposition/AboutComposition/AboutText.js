import React from "react";
import { Link } from "react-router-dom";
import eclips from "../../../img/eclips.png";
export const AboutText = () => {
  return (
    <div className="about-text-composition">
      <p>
        Наш проект создан с одной целью - сделать еще одного ребенка счастливее,
        исполнив его мечту! Вы, родители, знаете, что нужно вашему ребенку,
        чтобы увидеть счастье и радость на его лице! А мы, в свою очередь, будем
        рады помочь Вам в этом!
      </p>
      <div className="composition-link">
        <Link to="/aboutus">Подробнее</Link>
        <br />
        <img src={eclips} alt="" />
      </div>
    </div>
  );
};
