import React, { useEffect } from "react";

export const MyDreamsPage = () => {
  useEffect(() => {
    document.title = "Мои мечты || My Dream";
  }, []);
  return (
    <div className="my-dreams-wrapper">
      <div className="top-line">
        <h1 className="h1">Мои мечты</h1>
        <span>Создать мечту</span>
      </div>
    </div>
  );
};
