import React from "react";
import { connect } from "react-redux";

import { AppWrapper, Episode } from "../components";

const MainContainer = ({ episode }) => {
  console.log("episode: ", episode);
  console.log("here: ");
  return <AppWrapper component={Episode} {...episode} />;
};


const mapStateToProps = ({ episode }) =>
  ({ episode });

export default connect(mapStateToProps)(MainContainer);
