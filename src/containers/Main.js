/* eslint-disable react-hooks/exhaustive-deps */

import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchEpisode, fetchEpisodeList, fetchShowInfo } from "../data/actions";
import { POWER_PUFF_GIRLS_ID } from "../data/constants";

import { Main } from "../components";

const MainContainer = (state) => {
  const {
    episodeList,
    fetchShowInfo,
    fetchEpisode,
    fetchEpisodeList,
    history,
    showInfo
  } = state

  useEffect(() => {
    if (_.isEmpty(showInfo.data)) {
      fetchShowInfo(POWER_PUFF_GIRLS_ID);
    }
  }, []);

  useEffect(() => {
    if (_.isEmpty(episodeList.data) && showInfo.data.id) {
      fetchEpisodeList(showInfo.data.id);
    }
  }, []);

  const handleClick = ({ id }) => {
    fetchEpisode(id);
    const episodeId = _.last(id.split("/"));

    history.push(`/episode/${episodeId}`)
  }

  return <Main onClick={(e) => handleClick(e.target.dataset)} {...state} />;
}

const mapStateToProps = ({ episode, episodeList, showInfo }) =>
  ({ episode, episodeList, showInfo });

const mapDispatchToProps = dispatch => {
  return {
    fetchEpisode: episodeId => dispatch(fetchEpisode(episodeId)),
    fetchEpisodeList: showId => dispatch(fetchEpisodeList(showId)),
    fetchShowInfo: showId => dispatch(fetchShowInfo(showId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
