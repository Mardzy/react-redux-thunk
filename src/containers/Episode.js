import React from "react";
import { connect } from "react-redux";

import { ComponentWrapper, Episode } from "../components";

const EpisodeContainer = ({ episode }) =>
  <ComponentWrapper component={Episode} {...episode} />;

const mapStateToProps = ({ episode }) =>
  ({ episode });

export default connect(mapStateToProps)(EpisodeContainer);
