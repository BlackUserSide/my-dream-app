import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RemoveProcent } from "../ui/RemoveProcent";

export const DreamerComposition = ({ dataUser }) => {
  const [data, setData] = useState({
    removeProc: false,
  });
  useEffect(() => {
    if (dataUser.procentDream === "0") {
      setData((prev) => ({
        ...prev,
        removeProc: true,
      }));
    }
  }, []);
  return (
    <div className="dreamer-composition">
      <div className="name-wrapper">
        <h1 className="h1">{`${dataUser.name} ${dataUser.lastName}`}</h1>
      </div>
      <div className="bg-lost-wrapper">
        <h3 className="h3">
          Благотворительная часть: <span>{dataUser.procentDream}%</span>
        </h3>
      </div>
      <Link to="/mydreams">Мои мечты</Link>
      {data.removeProc ? <RemoveProcent setDatas={setData} /> : ""}
    </div>
  );
};
