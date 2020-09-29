import React, { useState } from "react";
import avatar from "../../img/avatars/1.png";
import { DreamerComposition } from "./DreamerComposition";
import { Philanthropist } from "./PhilanthropistCompistion";
import logOut from "../../img/exit.svg";
export const MainComposition = ({ dataUser }) => {
  const [logOut, setLogOut] = useState(false);
  return (
    <div className="main-composition">
      <div className="logo-wrapper">
        <h1 className="h1">
          {dataUser.status === "dreamer" ? "Мечтатель" : "Благотворитель"}
        </h1>
      </div>
      <div className="avatar-wrapper">
        <img src={avatar} alt="" />
      </div>
      {dataUser.status === "dreamer" ? (
        <DreamerComposition dataUser={dataUser} />
      ) : (
        <Philanthropist dataUser={dataUser} />
      )}
      <div className="log-out-btn">
        <img src={logOut} alt="" />
      </div>
    </div>
  );
};
