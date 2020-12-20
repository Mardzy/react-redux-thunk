import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "./index";

import { Episode, Episodes, Main } from "../containers";

const Router = () =>
  <>
    <Switch>
      <Route exact path={routes.index.path} component={Main} />
      <Route path={routes.episodes.path} component={Episodes} />
      <Route path={routes.episode.path} component={Episode} />
    </Switch>
  </>;

export default Router;
