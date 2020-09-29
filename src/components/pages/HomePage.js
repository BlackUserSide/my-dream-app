import React, { useEffect } from "react";
import { Header } from "../Header";
import { AboutUsMain } from "../HomeComposition/AboutUsMain";
import { DreamsMain } from "../HomeComposition/DreamsMain";
import { MainContent } from "../HomeComposition/MainContent";
import { ReviewsContent } from "../HomeComposition/ReviewsContent";

export const HomePage = () => {
  useEffect(() => {
    document.title = "Главная страница || My Dream";
  }, []);
  return (
    <div className="home-content">
      <Header />
      <MainContent />
      <AboutUsMain />
      <DreamsMain />
      <ReviewsContent />
    </div>
  );
};
