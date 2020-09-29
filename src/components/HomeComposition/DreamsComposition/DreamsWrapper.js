import React, { useState } from "react";
import img from "../../../img/dream/1.png";
import img2 from "../../../img/dream/3.png";
import img3 from "../../../img/dream/4.png";
import img4 from "../../../img/dream/5.png";
import { ItemDreams } from "./ItemDreams";

export const DreamsWrapper = () => {
  const [dataDreams, setDataDreams] = useState([
    {
      id: "1",
      nameChild: "Мишель",
      nameDream: "Поездка в диснейленд",
      needBalance: "25000",
      balance: "15000",
      image: img,
    },
    {
      id: "2",
      nameChild: "Мишель",
      nameDream: "Поездка в диснейленд",
      needBalance: "25000",
      balance: "15000",
      image: img2,
    },
    {
      id: "3",
      nameChild: "Мишель",
      nameDream: "Поездка в диснейленд",
      needBalance: "25000",
      balance: "15000",
      image: img3,
    },
    {
      id: "4",
      nameChild: "Мишель",
      nameDream: "Поездка в диснейленд",
      needBalance: "25000",
      balance: "15000",
      image: img4,
    },
  ]);
  return (
    <div className="dreams-wrapper">
      <div className="item-wrapper">
        {dataDreams.map((e, i) => (
          <ItemDreams content={e} key={i} />
        ))}
      </div>
    </div>
  );
};
