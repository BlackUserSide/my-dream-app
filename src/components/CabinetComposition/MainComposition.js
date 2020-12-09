import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import avatar from "../../img/avatars/1.png";
import logOuts from "../../img/exit.svg";
import { ChangeAvatar } from "../ui/ChangeAvatar";
import { DreamerComposition } from "./DreamerComposition";
import { Philanthropist } from "./PhilanthropistCompistion";

export const MainComposition = ({ dataUser }) => {
  const [dataMain, setDataMain] = useState({
    logOut: false,
    changeAvatarApi: true,
  });
  const logOutHandler = () => {
    localStorage.removeItem("user");
    setDataMain((prev) => ({
      ...prev,
      logOut: true,
    }));
  };

  return (
    <div className="main-composition">
      <div className="logo-wrapper">
        <h1 className="h1">
          {dataUser.status === "1" ? "Мечтатель" : "Благотворитель"}
        </h1>
      </div>
      <div
        className="avatar-wrapper"
        onClick={() =>
          setDataMain((prev) => ({
            ...prev,
            changeAvatarApi: true,
          }))
        }
      >
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
      {dataMain.logOut ? <Redirect to="/" /> : ""}
      {dataMain.changeAvatarApi ? (
        <ChangeAvatar setDataMain={setDataMain} />
      ) : (
        ""
      )}
    </div>
  );
};
