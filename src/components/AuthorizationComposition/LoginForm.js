import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
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
      const url = "http://my-dream-app/test";
      axios
        .post(url, {
          method: "login",
          login: loginData.login,
          password: loginData.password,
        })
        .then(({ data }) => {
          if (data.status === "success") {
            data.data.map((e) => {
              localStorage.setItem("user", e.id);
            });
            setLoginData((prev) => ({
              ...prev,
              redirect: true,
            }));
          } else {
            setLoginData((prev) => ({
              ...prev,
              message: "Неправильный логин или пароль",
            }));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setLoginData((prev) => ({
        ...prev,
        message: "Заполните пустые поля",
      }));
    }
  };

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
