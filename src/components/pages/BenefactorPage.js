import React, { useEffect } from "react";
import { BenefactorWrapper } from "../BenefactorComposition/BenefactorWrapper";
import { HeaderBlack } from "../HeaderBlack";

export const BenefactorPage = () => {
  useEffect(() => {
    document.title = "Рейтинг благотворителей || My Dream";
  }, []);
  return (
    <div className="benefactor-main">
      <HeaderBlack />
      <div className="top-line">
        <h1 className="h1">Благотворители</h1>
      </div>
      <BenefactorWrapper />
    </div>
  );
};
