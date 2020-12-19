import React from "react";
import { Switch, Route } from "react-router-dom";

import { Episode, Show } from "./containers";

export const routes = {
  index: { name: "home", path: "/" },
  episode: { name: "episode", path: "/episode" }
}

const Routes = () =>
  <>
    <Switch>
      <Route exact path={routes.index.path} component={Show} />
      <Route path={routes.episode.path} component={Episode} />
    </Switch>
  </>;

export default Routes;
