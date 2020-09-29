import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img from "../../img/dream/2.png";
import { InfoDreamWrapper } from "../DreamCardComposition/InfoDreamWrapper";
import { HeaderBlack } from "../HeaderBlack";
export const DreamCardPage = () => {
  let { id } = useParams();
  const [data] = useState({
    id: "3",
    nameChild: "Мишель",
    nameDream: "Поездка в диснейленд",
    needBalance: "25000",
    balance: "15000",
    descriptionDream:
      "Наш проект создан с одной целью - сделать еще одного ребенка счастливее, исполнив его мечту! Вы, родители, знаете, что нужно вашему ребенку, чтобы увидеть счастье и радость на его лице! А мы, в свою очередь, будем рады помочь Вам в этом!",
    image: img,
  });
  useEffect(() => {
    document.title = `Мечта ${data.nameDream} || My Dream`;
  }, []);
  return (
    <div className="dream-card-main">
      <HeaderBlack />
      <div className="top-line">
        <h1 className="h1">Карточка мечты</h1>
      </div>
      <div className="wrapper-dream">
        <div className="logo-dream-wrapper">
          <img src={data.image} alt="" />
        </div>
        <InfoDreamWrapper data={data} />
      </div>
    </div>
  );
};
