import _ from "lodash";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Breadcrumbs, Link, Toolbar, Typography } from "@material-ui/core";

import { routes } from "../../config"
const { index :{ name, path }, episode } = routes

const NavBar = () => {
  const handleClick = (e) => {
    e.preventDefault();

  }

  return (
    <AppBar className="navBar" position="sticky">
      <Toolbar className="navBar-toolBar">
        <Breadcrumbs aria-label="breadcrumb">
            <Link
              children={_.capitalize(name)}
              component={RouterLink}
              color="inherit"
              key={name}
              onClick={handleClick}
              to={path}
            />
          <Link
            children={_.capitalize(episode.name)}
            component={RouterLink}
            color="inherit"
            key={episode.name}
            onClick={handleClick}
            to={episode.path}
          />
          {/*<Typography color="textPrimary">Breadcrumb</Typography>*/}
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
