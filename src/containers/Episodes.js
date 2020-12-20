import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchEpisode, fetchEpisodeList } from "../data/actions"

import { AppWrapper, Episodes } from "../components";

const EpisodesContainer = ({ fetchEpisode, fetchEpisodeList, episodeList, showInfo, history }) => {
  const handleClick = ({ id }) => {
    fetchEpisode(id);
    history.push(`/episode/${id}`)
  }

  useEffect(() => {
    if (!episodeList.data) {
      fetchEpisodeList(showInfo.data.id);
    }
  }, [episodeList.data, fetchEpisodeList, showInfo.data.id]);

  return <AppWrapper component={Episodes} onClick={(e) => handleClick(e.target.dataset)} {...episodeList}/>
}

const mapStateToProps = ({ episode, episodeList, showInfo }) =>
  ({ episode, episodeList, showInfo });

const mapDispatchToProps = dispatch => {
  return {
    fetchEpisode: episodeId => dispatch(fetchEpisode(episodeId)),
    fetchEpisodeList: showId => dispatch(fetchEpisodeList(showId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EpisodesContainer);
