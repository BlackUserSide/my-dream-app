import React from "react";
import { DreamsWrapper } from "./DreamsComposition/DreamsWrapper";

export const DreamsMain = () => {
  return (
    <section className="dreams-wrapper">
      <div className="top-line">
        <h1 className="h1">Мечты отображаются по мере исполнения</h1>
      </div>
      <DreamsWrapper />
    </section>
  );
};
