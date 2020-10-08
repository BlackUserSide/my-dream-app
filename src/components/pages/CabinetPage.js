import React, { useEffect, useMemo, useState } from "react";
import { Redirect } from "react-router-dom";
import { MainComposition } from "../CabinetComposition/MainComposition";
import { AddBalanceContext } from "../context/AddBalanceContext";
import { HeaderBlack } from "../HeaderBlack";
import axios from "axios";
import { SystemNotification } from "../ui/SystemNotification";
export const CabinetPage = () => {
  const url = "http://my-dream-app/test";
  const [dataUser, setDataUser] = useState({
    redirect: false,
    notification: false,
    message: undefined,
  });
  const getDataUser = () => {
    axios
      .post(url, {
        method: "getDataUser",
        id: localStorage.getItem("user"),
      })
      .then(({ data }) => {
        if (data.status === "success") {
          data.data.map((e) => {
            setDataUser((prev) => ({
              ...prev,
              name: e.name,
              lastName: e.lastName,
              status: e.status,
              procentDream: e.procentDream,
              balance: e.balance,
            }));
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    document.title = "Личный кабинет || My Dream";
    getDataUser();
  }, []);
  const authContext = useMemo(() => {
    return {
      addBalance: (balance) => {
        const oldBalance = Number(dataUser.balance);
        const newBalance = Number(balance) + oldBalance;
        axios
          .post(url, {
            method: "updateBalance",
            balance: newBalance,
            id: localStorage.getItem("user"),
          })
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
        getDataUser();
        setDataUser((prev) => ({
          ...prev,
          notification: true,
          message: `Ваш баланс пополнен на ${balance} TR. Приятного использования!`,
        }));
        setTimeout(() => {
          setDataUser((prev) => ({
            ...prev,
            notification: false,
            message: undefined,
          }));
        }, 2000);
      },
      updateUser: () => {
        getDataUser();
      },
    };
  });

  return (
    <div className="cabinet-wrapper">
      <AddBalanceContext.Provider value={authContext}>
        <HeaderBlack />
        <MainComposition dataUser={dataUser} />
        {dataUser.redirect ? <Redirect to="/" /> : ""}
      </AddBalanceContext.Provider>
      {dataUser.notification ? (
        <SystemNotification message={dataUser.message} />
      ) : (
        ""
      )}
    </div>
  );
};
