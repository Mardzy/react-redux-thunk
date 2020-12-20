import _ from "lodash";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Breadcrumbs, Link, Toolbar, Typography } from "@material-ui/core";

import { routes } from "../../config"
const { index :{ name, path }, episodes } = routes

const NavBar = () => (
    <AppBar className="navBar" position="fixed">
      <Toolbar className="navBar-toolBar">
        <Breadcrumbs aria-label="breadcrumb">
            <Link
              children={_.capitalize(name)}
              component={RouterLink}
              color="inherit"
              key={name}
              to={path}
            />
          <Link
            children={_.capitalize(episodes.name)}
            component={RouterLink}
            color="inherit"
            key={episodes.name}
            to={episodes.path}
          />
          {/*<Typography color="textPrimary">Breadcrumb</Typography>*/}
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );

export default NavBar;
