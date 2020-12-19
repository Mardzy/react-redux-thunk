import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchEpisodeList } from "../../data/actions"

import { Container } from "../../components";

const Episode = ({ fetchEpisodeList, showInfo }) => {
  const { data } = showInfo;

  useEffect(() => {
    fetchEpisodeList();
  }, [fetchEpisodeList]);
  console.log("episodes: ", data, Container);
  return <Container children="I'm an episode" {...showInfo} />
}

const mapStateToProps = ({ showInfo }) =>
  ({ showInfo });

const mapDispatchToProps = dispatch => {
  return {
    fetchEpisodeList: showId => dispatch(fetchEpisodeList())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Episode);
