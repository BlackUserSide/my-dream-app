import React, { useState } from "react";
import { BanefactorItem } from "./BanefactorItem";

export const BenefactorWrapper = () => {
  const [data, setData] = useState([
    { id: 1, name: "Сергей", lastName: "Несмеянов", lvl: "Вода" },
    { id: 2, name: "Оля", lastName: "Иванова", lvl: "Вода" },
    { id: 3, name: "Никита", lastName: "Филатова", lvl: "Вода" },
  ]);
  return (
    <div className="benefactor-wrapper">
      {data.map((e) => (
        <BanefactorItem key={e.id} content={e} />
      ))}
    </div>
  );
};
