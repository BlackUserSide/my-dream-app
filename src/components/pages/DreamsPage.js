import React, { useEffect } from "react";
import { HeaderBlack } from "../HeaderBlack";
export const DreamsPage = () => {
  useEffect(() => {
    document.title = "Мечты || My Dream";
    console.log(1);
  }, []);
  return (
    <div className="dreams-page-main">
      <HeaderBlack />
    </div>
  );
};
