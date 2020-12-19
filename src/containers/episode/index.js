import React, { useEffect } from "react";
import { connect } from "react-redux";


import { Container } from "../../components";

const Episode = ({ fetchEpisodes, showInfo }) => {
  const { data } = showInfo;

  useEffect(() => {
    fetchEpisodes();
  }, [fetchEpisodes]);
  console.log("episodes: ", data, Container);
  return <Container children="I'm an episode" {...showInfo} />
}

const mapStateToProps = ({ showInfo }) =>
  ({ showInfo });

const mapDispatchToProps = dispatch => {
  return {
    fetchEpisodes: showId => dispatch(fetchEpisodes(showId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Episode);
