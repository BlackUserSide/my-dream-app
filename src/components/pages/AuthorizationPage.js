import React, { useState } from "react";
import { LoginForm } from "../AuthorizationComposition/LoginForm";
import { HeaderBlack } from "../HeaderBlack";
import pres1 from "../../img/pres1.png";
import pres2 from "../../img/pres2.png";
import pres3 from "../../img/pres3.png";
import { RegisterForm } from "../AuthorizationComposition/RegisterForm";
import { Redirect } from "react-router-dom";
export const AuthorizationPage = () => {
  const [page, setPage] = useState("1");
  let content = null;
  let redirect = false;
  if (page === "1") {
    content = <LoginForm changePage={setPage} />;
  } else {
    content = <RegisterForm changePage={setPage} />;
  }
  if (localStorage.getItem("user") !== null) {
    redirect = true;
  }
  return (
    <div className="authorization-main">
      <HeaderBlack />
      {content}
      <img src={pres1} className="image-wrapp-1" alt="" />
      <img src={pres2} alt="" className="image-wrapp-2" />
      <img src={pres3} alt="" className="image-wrapp-3" />
      {redirect ? <Redirect to="/cabinet" /> : ""}
    </div>
  );
};
