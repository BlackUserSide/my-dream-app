import React from "react";
import { Link } from "react-router-dom";
import { NavbarBlack } from "./NavbarBlack";

export const HeaderBlack = () => {
  return (
    <header className="site-header-black">
      <div className="logo-wrapper">
        <Link to="/">
          <h1 className="h1">My dream</h1>
        </Link>
      </div>
      <NavbarBlack />
    </header>
  );
};
