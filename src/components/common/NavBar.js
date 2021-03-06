import _ from "lodash";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Breadcrumbs, Link, Toolbar } from "@material-ui/core";

import { routes } from "../../config"
const { index :{ name, path } } = routes

const NavBar = () => (
    <AppBar className="navBar" position="fixed">
      <Toolbar className="navBar-toolBar">
        <Breadcrumbs aria-label="breadcrumb">
            <Link
              children={_.capitalize(name)}
              component={RouterLink}
              color="inherit"
              to={path}
            />
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );

export default NavBar;
