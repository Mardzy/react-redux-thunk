import React from "react";
import { connect } from "react-redux";

import { AppWrapper, Episode } from "../components";
import EpisodesContainer from "./Episodes";

const EpisodeContainer = ({ episode }) =>
  <AppWrapper component={Episode} {...episode} />;


const mapStateToProps = ({ episode }) =>
  ({ episode });

export default connect(mapStateToProps)(EpisodeContainer);
