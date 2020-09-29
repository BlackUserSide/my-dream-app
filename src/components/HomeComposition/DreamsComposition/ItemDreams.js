import React from "react";
import { Link } from "react-router-dom";

export const ItemDreams = ({ content }) => {
  const procent = (+content.balance * 100) / Number(content.needBalance);
  let classProcent = null;
  if (procent <= 25) {
    classProcent = "10";
  } else if (procent <= 50) {
  }
  return (
    <Link to={`/dreamcard/${content.id}`}>
      <div className="item-dreams">
        <div className="image-wrapper">
          <img src={content.image} alt="" />
        </div>
        <div className="text-wrapper-dream">
          <p className="name-child">{content.nameChild}</p>
          <div className="line-halt"></div>
          <p className="logo-dream">Мечта</p>
          <p className="name-dream">{content.nameDream}</p>
          <div className="procent-wrapper">
            {/* <svg>
            <circle
              cy="100"
              cx="100"
              r="80"
              fill="transparent"
              stroke="black"
              stroke-width="20"
            ></circle>
            <circle
              class="st0"
              cy="100"
              cx="100"
              r="80"
              fill="transparent"
              stroke="orange"
              stroke-width="20"
              stroke-dasharray="62%,1000"
              stroke-dashoffset="0"
            ></circle>
          </svg> */}
          </div>
        </div>
      </div>
    </Link>
  );
};
