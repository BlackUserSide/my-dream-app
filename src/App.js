import React from "react";
import "./App.sass";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import { HomePage } from "./components/pages/HomePage";
import { AuthorizationPage } from "./components/pages/AuthorizationPage";
import { DreamCardPage } from "./components/pages/DreamCardPage";
import { CabinetPage } from "./components/pages/CabinetPage";
import { BenefactorPage } from "./components/pages/BenefactorPage";
import { MyDreamsPage } from "./components/pages/MyDreamsPage";
import { DreamsPage } from "./components/pages/DreamsPage";
import { useEffect } from "react";
import axios from "axios";
export const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/authorization" component={AuthorizationPage} />
      <Route path="/dreamcard/:id" component={DreamCardPage} />
      <Route path="/cabinet" component={CabinetPage} />
      <Route path="/benefactor" component={BenefactorPage} />
      <Route path="/mydreams" exact component={MyDreamsPage} />
      <Route path="/dreams" component={DreamsPage} />
    </Switch>
  );
};
