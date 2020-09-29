import React, { useContext, useState } from "react";
import { AddBalanceContext } from "../context/AddBalanceContext";

export const AddBalanceForm = ({ setPopUp }) => {
  const [balance, setBalance] = useState("");
  const { addBalance } = useContext(AddBalanceContext);
  const changeHandler = (e) => {
    const value = e.currentTarget.value;
    if (value !== "0") {
      if (value.match(/^-?\d*\.?\d*$/)) {
        setBalance(value);
      } else {
        setBalance("");
      }
    } else {
      setBalance("1");
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addBalance(balance);
    setPopUp(false);
  };
  return (
    <>
      <div className="bg-lock" onClick={() => setPopUp(false)}></div>
      <form className="add-balance-remove" onSubmit={(e) => submitHandler(e)}>
        <div className="top-line">
          <h3 className="h4">My Dream</h3>
        </div>
        <h4 className="h4">Введите сумму пополнения ниже</h4>
        <input
          type="text"
          name="balance"
          value={balance}
          onChange={(e) => changeHandler(e)}
        />
        <button type="submit">Пополнить</button>
      </form>
    </>
  );
};
