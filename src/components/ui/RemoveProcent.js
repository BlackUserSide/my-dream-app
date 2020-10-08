import React from "react";
import { useState } from "react";
import { MessageFormProcent } from "./MessageFormProcent";
import axios from "axios";
import { useContext } from "react";
import { AddBalanceContext } from "../context/AddBalanceContext";
export const RemoveProcent = ({ setDatas }) => {
  const { updateUser } = useContext(AddBalanceContext);
  const [data, setData] = useState({
    value: "5",
    message: undefined,
    description: false,
  });
  const handlChange = (val) => {
    if (val.match(/^\d+$/) || val === "") {
      setData((prev) => ({
        ...prev,
        value: val,
      }));
    } else {
      setData((prev) => ({
        ...prev,
        message: "В поле должны быть только цифры",
      }));
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (Number(data.value) === 0) {
      setData((prev) => ({
        ...prev,
        message: "Заполните поле",
      }));
    } else if (Number(data.value) < 5) {
      setData((prev) => ({
        ...prev,
        message: "Процент не может быть меньше 5",
      }));
    } else if (Number(data.value) > 25) {
      setData((prev) => ({
        ...prev,
        message: "Процент не может быть больше 25",
      }));
    } else {
      const url = "http://my-dream-app/test";
      axios
        .post(url, {
          method: "removeProcent",
          id: localStorage.getItem("user"),
          procent: data.value,
        })
        .then(({ data }) => {
          if (data.status === "success") {
            setData((prev) => ({
              ...prev,
              message: "Процент успешно изменился",
            }));
            setDatas({
              removeProc: false,
            });
            updateUser();
          }
        })
        .catch((err) => {
          console.log(err);
        });
      setData((prev) => ({
        ...prev,
        removeProc: false,
      }));
    }
  };
  return (
    <>
      <div className="bg-lock"></div>
      <form className="remove-procent" onSubmit={submitHandler}>
        <h3 className="h3">Введите процент благотворительный части</h3>
        {data.description ? <MessageFormProcent /> : ""}
        {data.message !== undefined ? (
          <p className="err-message-procent">{data.message}</p>
        ) : (
          ""
        )}
        <input
          type="text"
          value={data.value}
          onChange={(e) => handlChange(e.currentTarget.value)}
          onFocus={() =>
            setData((prev) => ({
              ...prev,
              description: true,
            }))
          }
          required
        />
        <button type="submit">Изменить</button>
      </form>
    </>
  );
};
