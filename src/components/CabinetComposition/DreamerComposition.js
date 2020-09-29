import React from "react";
import { Link } from "react-router-dom";

export const DreamerComposition = ({ dataUser }) => {
  return (
    <div className="dreamer-composition">
      <div className="name-wrapper">
        <h1 className="h1">{`${dataUser.name} ${dataUser.lastName}`}</h1>
      </div>
      <div className="bg-lost-wrapper">
        <h3 className="h3">
          Благотворительная часть: <span>{dataUser.bgLost}</span>
        </h3>
      </div>
      <Link to="/mydreams">Мои мечты</Link>
    </div>
  );
};
