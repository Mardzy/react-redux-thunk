import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchEpisodeList } from "../data/actions"

import { AppWrapper, Episodes } from "../components";

const EpisodesContainer = (state) => {
  const { fetchEpisodeList, episodeList, showInfo } = state;

  useEffect(() => {
    fetchEpisodeList(showInfo.data.id);
  }, [fetchEpisodeList, showInfo]);

  return <AppWrapper component={Episodes} {...episodeList} />
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = dispatch => {
  return {
    fetchEpisodeList: showId => dispatch(fetchEpisodeList(showId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodesContainer);
