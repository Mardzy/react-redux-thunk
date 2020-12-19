import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchShowInfo, fetchEpisodeList } from "../../data/actions";
import { POWER_PUFF_GIRLS_ID } from "../../data/constants";

import { LoadingContainer, ShowView } from "../../components";

const Show = (props) => {
  const { fetchEpisodeList, fetchShowInfo, episodeList, showInfo } = props;
  useEffect(() => {
    fetchShowInfo(POWER_PUFF_GIRLS_ID);
    fetchEpisodeList();
  }, [fetchEpisodeList, fetchShowInfo]);

  return <LoadingContainer component={ShowView} {...showInfo} />
}

const mapStateToProps = (state) => {
  const { episodeList, showInfo } = state;
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
