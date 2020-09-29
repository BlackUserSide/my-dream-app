import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="site-header">
      <div className="logo-wrapper">
        <Link to="/">My dream</Link>
      </div>
      <Navbar />
    </header>
  );
};
