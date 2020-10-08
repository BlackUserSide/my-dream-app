import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export const Navbar = () => {
  const [content, setContent] = useState({
    cont: true,
    name: undefined,
  });

  const getNameUser = () => {
    if (localStorage.getItem("user") !== null) {
      const url = "http://my-dream-app/test";
      axios
        .post(url, {
          method: "getDataUser",
          id: localStorage.getItem("user"),
        })
        .then(({ data }) => {
          console.log(data);
          data.data.map((e) => {
            setContent({
              cont: false,
              name: e.name,
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    getNameUser();
  }, []);
  console.log(content);

  return (
    <nav className="main-nav">
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
          {content.cont ? (
            <Link to="/authorization">Авторизация</Link>
          ) : (
            <Link to="/cabinet">{content.name}</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
