import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchEpisodeList } from "../data/actions"

import { AppWrapper, Episodes } from "../components";

const EpisodesContainer = ({ fetchEpisodeList, episodeList, showInfo }) => {
  console.log("e list: ", episodeList);
  useEffect(() => {
    if (!episodeList) {
      fetchEpisodeList(showInfo.data.id);
    }
  }, [episodeList, fetchEpisodeList, showInfo]);

  return <AppWrapper component={Episodes} {...episodeList}/>
}

const mapStateToProps = ({ episodeList, showInfo }) =>
  ({ episodeList, showInfo });

const mapDispatchToProps = dispatch => {
  return {
    fetchEpisodeList: showId => dispatch(fetchEpisodeList(showId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodesContainer);
