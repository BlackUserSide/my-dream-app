import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export const NavbarBlack = () => {
  const [content, setContent] = useState({
    status: true,
    name: "",
  });

  useEffect(() => {
    let nameUser = undefined;
    const url = "http://my-dream-app/test";
    if (localStorage.getItem("user") === null) {
    } else {
      axios
        .post(url, {
          method: "getDataUser",
          id: localStorage.getItem("user"),
        })
        .then(({ data }) => {
          data.data.map((e) => {
            nameUser = e.name;
          });
          setContent({
            status: false,
            name: nameUser,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

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
        <li>
          {content.status ? (
            <Link to="/authorization">Авторизация</Link>
          ) : (
            <Link to="/cabinet">{content.name}</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
