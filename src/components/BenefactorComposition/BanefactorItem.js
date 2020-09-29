import React from "react";
import avatar from "../../img/avatars/1.png";
export const BanefactorItem = ({ content }) => {
  return (
    <div className="banifactor-tem">
      <div className="img-wrapper">
        <img src={avatar} alt="" />
      </div>
      <div className="name-logo">
        <h3 className="h3">{`${content.name} ${content.lastName}`}</h3>
      </div>
      <div className="level-wrapper">
        <p>Уровень: {content.lvl}</p>
      </div>
    </div>
  );
};
