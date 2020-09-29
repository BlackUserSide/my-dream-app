import React, { useEffect, useState } from "react";
import backIcon from "../../img/left-arrow.svg";
export const RegisterForm = ({ changePage }) => {
  const [registerData, setRegisterData] = useState({
    name: "",
    lastName: "",
    password: "",
    passwordReq: "",
    status: "",
    message: "",
  });
  useEffect(() => {
    document.title = "Регистрация || My Dream";
  }, []);
  const registerHandler = (e) => {
    let name = e.currentTarget.name;
    let val = e.currentTarget.value;
    if (name === "name") {
      setRegisterData((prev) => ({
        ...prev,
        name: val,
      }));
    } else if (name === "lastName") {
      setRegisterData((prev) => ({
        ...prev,
        lastName: val,
      }));
    } else if (name === "password") {
      setRegisterData((prev) => ({
        ...prev,
        password: val,
      }));
    } else if (name === "password-req") {
      setRegisterData((prev) => ({
        ...prev,
        passwordReq: val,
      }));
    }
  };
  const statusHandler = (status) => {
    setRegisterData((prev) => ({
      ...prev,
      status: status,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setRegisterData((prev) => ({
      ...prev,
      message: "На данный момент регистрация отключена, ожидайте обновлений",
    }));
  };
  return (
    <>
      <div className="back-arrow" onClick={() => changePage("1")}>
        <img src={backIcon} alt="" />
      </div>

      <form className="register-form" onSubmit={(e) => submitHandler(e)}>
        <h1 className="h1">Регистрация</h1>
        {registerData.message !== "" ? (
          <p className="err-message">{registerData.message}</p>
        ) : (
          ""
        )}
        <input
          type="text"
          name="name"
          placeholder="Имя"
          onChange={(e) => registerHandler(e)}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Фамилия"
          onChange={(e) => registerHandler(e)}
        />
        <input
          type="text"
          name="password"
          placeholder="Пароль"
          onChange={(e) => registerHandler(e)}
        />
        <input
          type="text"
          name="password-req"
          placeholder="Повторите пароль"
          onChange={(e) => registerHandler(e)}
        />
        <div className="btn-change-status">
          <span
            className={`status-btn ${
              registerData.status === "1" ? "active-status" : ""
            }`}
            onClick={() => statusHandler("1")}
          >
            Мечтатель
          </span>
          <span
            className={`status-btn ${
              registerData.status === "2" ? "active-status" : ""
            }`}
            onClick={() => statusHandler("2")}
          >
            Благотворитель
          </span>
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
};
