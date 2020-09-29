import React from "react";
import { RewiewsWrapper } from "./ReviewsComposition/RewiewsWrapper";

export const ReviewsContent = () => {
  return (
    <section className="reviews-main">
      <div className="top-line">
        <h1 className="h1">Отзывы</h1>
      </div>
      <RewiewsWrapper />
    </section>
  );
};
