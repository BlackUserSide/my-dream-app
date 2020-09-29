import React from "react";

export const InfoDreamWrapper = ({ data }) => {
  return (
    <div className="info-dream-wrapper">
      <div className="top-logo-dream">
        <h3 className="h3">{data.nameDream}</h3>
        <p>{data.descriptionDream}</p>
        <div className="btn-add-balance-dream">
          <span>Пополнить</span>
        </div>
      </div>
    </div>
  );
};
