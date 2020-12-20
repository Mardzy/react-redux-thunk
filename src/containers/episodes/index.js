import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchEpisodeList } from "../../data/actions"
import { showIdSelector } from "../../data/selectors";

const Episodes = (state) => {
  const { fetchEpisodeList, showInfo } = state;
  const showId = showIdSelector(state);
  console.log("showId", showId);


  useEffect(() => {
    fetchEpisodeList();
  }, [fetchEpisodeList]);

  return <div>episode</div>
  // return <LoadingContainer component="I'm an episode" {...showInfo} />
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
)(Episodes);
