import React from "react";
import { Switch, Route } from "react-router";

import { routes } from "./index";

import { Episodes, Main } from "../containers";

const Router = () =>
  <>
    <Switch>
      <Route exact path={routes.index.path} component={Main} />
      <Route path={routes.episodes.path} component={Episodes} />
    </Switch>
  </>;

export default Router;
