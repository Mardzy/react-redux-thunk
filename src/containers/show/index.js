import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchShowInfo, fetchEpisodeList } from "../../data/actions";
import { POWER_PUFF_GIRLS_ID } from "../../data/constants";

import { Container } from "../../components";

const Show = (props) => {
  const { fetchEpisodeList, fetchShowInfo, episodeList: {data: list}, showInfo } = props;
  // const { data } = showInfo;
  console.log("episodeList: ", list);
  useEffect(() => {
    fetchShowInfo(POWER_PUFF_GIRLS_ID);
    fetchEpisodeList();
  }, [fetchEpisodeList, fetchShowInfo]);

  return <Container children="I'm a show" {...showInfo} />
}

const mapStateToProps = (state) => {
  const { episodeList, showInfo } = state
  console.log("state: ", state);
  return ({ episodeList, showInfo });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchShowInfo: showId => dispatch(fetchShowInfo(showId)),
    fetchEpisodeList: () => dispatch(fetchEpisodeList())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
