import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import avatar from "../../img/avatars/1.png";
import logOuts from "../../img/exit.svg";
import { DreamerComposition } from "./DreamerComposition";
import { Philanthropist } from "./PhilanthropistCompistion";

export const MainComposition = ({ dataUser }) => {
  const [logOut, setLogOut] = useState(false);
  const logOutHandler = () => {
    localStorage.removeItem("user");
    setLogOut(true);
  };
  return (
    <div className="main-composition">
      <div className="logo-wrapper">
        <h1 className="h1">
          {dataUser.status === "1" ? "Мечтатель" : "Благотворитель"}
        </h1>
      </div>
      <div className="avatar-wrapper">
        <img src={avatar} alt="" />
      </div>
      {dataUser.status === "1" ? (
        <DreamerComposition dataUser={dataUser} />
      ) : (
        <Philanthropist dataUser={dataUser} />
      )}
      <div className="log-out-btn" onClick={logOutHandler}>
        <img src={logOuts} alt="" />
      </div>
      {logOut ? <Redirect to="/" /> : ""}
    </div>
  );
};
