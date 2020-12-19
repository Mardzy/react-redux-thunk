import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "./index";

import { Episode, Show } from "../containers";

const Router = () =>
  <>
    <Switch>
      <Route exact path={routes.index.path} component={Show} />
      <Route path={routes.episode.path} component={Episode} />
    </Switch>
  </>;

export default Router;
