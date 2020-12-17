import React from "react";
import { Switch, Route } from "react-router-dom";

import { Episode, Show } from "./containers";

const routes = {
  index: "/",
  episode: "/episode"
}

const Routes = () =>
  <main>
    <Switch>
      <Route exact path="/" component={Show} />
      <Route path={routes.episode} component={Episode} />
    </Switch>
  </main>;

export default Routes;
