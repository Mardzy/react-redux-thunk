import React from "react";
import { connect } from "react-redux";

import { Wrapper, Episode } from "../components";

const EpisodeContainer = ({ episode }) =>
  <Wrapper component={Episode} {...episode} />;

const mapStateToProps = ({ episode }) =>
  ({ episode });

export default connect(mapStateToProps)(EpisodeContainer);
