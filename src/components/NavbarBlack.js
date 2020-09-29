import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const NavbarBlack = () => {
  let content = null;
  const getNameUser = () => {
    let nameUser = null;
    if (localStorage.getItem("user") === null) {
      content = <Link to="/authorization">Авторизация</Link>;
    } else {
      let dataUser = JSON.parse(localStorage.getItem("user"));
      nameUser = dataUser.name;
      content = <Link to="/cabinet">{nameUser}</Link>;
    }
  };
  getNameUser();

  return (
    <nav className="black-navbar">
      <ul>
        <li>
          <Link to="/aboutus">О нас</Link>
        </li>
        <li>
          <Link to="/dreams">Мечты</Link>
        </li>
        <li>
          <Link to="/benefactor">Благотворитель</Link>
        </li>
        <li>{content}</li>
      </ul>
    </nav>
  );
};
