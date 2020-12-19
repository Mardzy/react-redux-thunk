import _ from "lodash";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Breadcrumbs, Link, Toolbar, Typography } from "@material-ui/core";

import { routes } from "../../routes"


const NavBar = () => {
  const handleClick = (e) => {
    e.preventDefault();

  }

  return (
    <AppBar>
      <Toolbar>
        <Breadcrumbs aria-label="breadcrumb">
          {_.map(_.values(routes), ({ name, path }) =>
            <Link
              children={_.capitalize(name)}
              component={RouterLink}
              color="inherit"
              key={name}
              onClick={handleClick}
              to={path}
            />)}
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
