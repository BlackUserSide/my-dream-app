import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Redirect } from "react-router-dom";
import { MainComposition } from "../CabinetComposition/MainComposition";
import { AddBalanceContext } from "../context/AddBalanceContext";
import { HeaderBlack } from "../HeaderBlack";

export const CabinetPage = () => {
  const [dataUser, setDataUser] = useState({
    redirect: false,
  });
  const getUserData = () => {
    let data = JSON.parse(localStorage.getItem("user"));
    if (data === null) {
      setDataUser((prev) => ({ ...prev, redirect: true }));
    } else {
      setDataUser((prev) => ({
        ...prev,
        id: data.id,
        name: data.name,
        lastName: data.lastName,
        bgLost: data.bgLost,
        status: data.status,
        balance: data.balance,
      }));
    }
  };
  useEffect(() => {
    document.title = "Личный кабинет || My Dream";
    getUserData();
  }, []);
  useEffect(() => {
    const obj = {
      id: dataUser.id,
      name: dataUser.name,
      lastName: dataUser.lastName,
      bgLost: dataUser.bgLost,
      status: dataUser.status,
      balance: dataUser.balance,
    };
    localStorage.setItem("user", JSON.stringify(obj));
  }, [dataUser]);
  const authContext = useMemo(() => {
    return {
      addBalance: (balance) => {
        const oldBalance = Number(dataUser.balance);
        setDataUser((prev) => ({
          ...prev,
          balance: Number(balance) + oldBalance,
        }));
      },
    };
  });
  console.log(dataUser);
  return (
    <div className="cabinet-wrapper">
      <AddBalanceContext.Provider value={authContext}>
        <HeaderBlack />
        <MainComposition dataUser={dataUser} />
        {dataUser.redirect ? <Redirect to="/" /> : ""}
      </AddBalanceContext.Provider>
    </div>
  );
};
