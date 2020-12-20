import React from "react";
import { Switch, Route } from "react-router";

import { routes } from "./index";

import { Episodes, Show } from "../containers";

const Router = () =>
  <>
    <Switch>
      <Route exact path={routes.index.path} component={Show} />
      <Route path={routes.episode.path} component={Episodes} />
    </Switch>
  </>;

export default Router;
