import React, { useState } from "react";
import { AddBalanceForm } from "../ui/AddBalanceForm";

export const Philanthropist = ({ dataUser }) => {
  const [popUp, setPopUp] = useState(false);

  return (
    <div className="philanthropist-composition">
      <div className="name-wrapper">
        <h1>{`${dataUser.name} ${dataUser.lastName}`}</h1>
      </div>
      <div className="level-wrapper">
        <h3 className="h3">
          Уровень: <span>Вода</span>
        </h3>
      </div>
      <div className="balance-wrapper">
        <h3 className="h3">
          Баланс: <span>{dataUser.balance}</span> TR
        </h3>
      </div>
      <div className="add-balance-btn">
        <span onClick={() => setPopUp(true)}>Пополнить</span>
      </div>
      {popUp ? <AddBalanceForm setPopUp={setPopUp} /> : ""}
    </div>
  );
};
