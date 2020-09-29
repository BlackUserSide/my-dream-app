import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

export const LoginForm = (props) => {
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
    message: "",

    redirect: false,
  });
  useEffect(() => {
    document.title = "Вход || My Dream";
  }, []);
  console.log(loginData);
  const loginHandler = (e) => {
    let name = e.currentTarget.name;
    let val = e.currentTarget.value;
    if (name === "email") {
      setLoginData((prev) => ({
        ...prev,
        login: val,
      }));
    } else {
      setLoginData((prev) => ({
        ...prev,
        password: val,
      }));
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (loginData.login !== "" && loginData.password !== "") {
      dataUser.map((e) => {
        if (e.login === loginData.login && e.password === loginData.password) {
          const user = {
            id: e.id,
            name: e.name,
            lastName: e.lastName,
            bgLost: e.bgLost,
            status: e.status,
            balance: e.balance,
          };
          localStorage.setItem("user", JSON.stringify(user));
          setLoginData({
            login: "",
            password: "",
            message: "",
            redirect: true,
          });
        } else {
          setLoginData((prev) => ({
            ...prev,
            message: "Логин или пароль не верны",
          }));
        }
      });
    } else {
      setLoginData((prev) => ({
        ...prev,
        message: "Заполните пустые поля",
      }));
    }
  };
  const dataUser = [
    {
      id: "1",
      login: "admin",
      password: "admin",
      status: "philanthropist",
      bgLost: "10%",
      name: "Sergey",
      lastName: "Nesmeyanov",
      balance: "0",
    },
    {
      id: "2",
      login: "admins",
      password: "admins",
      status: "dreamer",
      bgLost: "10%",
      name: "Sergey",
      lastName: "Nesmeyanov",
      balance: "0",
    },
  ];

  return (
    <>
      <form className="login-form" onSubmit={(e) => submitHandler(e)}>
        <h1 className="h1">Авторизация</h1>
        {loginData.message !== "" ? (
          <p className="err-message">{loginData.message}</p>
        ) : (
          ""
        )}
        <input
          type="text"
          name="email"
          placeholder="E-Mail"
          onChange={(e) => loginHandler(e)}
          value={loginData.login}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={(e) => loginHandler(e)}
          value={loginData.password}
        />
        <br />
        <h4>
          У вас еще нет аккаунта?{" "}
          <span onClick={() => props.changePage("2")}>Зарегистрируйтесь</span>
        </h4>
        <button type="submit">Войти</button>
        {loginData.redirect ? <Redirect to="/cabinet" /> : ""}
      </form>
    </>
  );
};
