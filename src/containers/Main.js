import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchShowInfo } from "../data/actions";
import { POWER_PUFF_GIRLS_ID } from "../data/constants";

import { AppWrapper, Main } from "../components";

const MainContainer = ({ fetchShowInfo, showInfo }) => {

  useEffect(() => {
    if (!showInfo.data) {
      fetchShowInfo(POWER_PUFF_GIRLS_ID);
    }
  }, [fetchShowInfo, showInfo.data]);

  return <AppWrapper component={Main} {...showInfo} />;
}

const mapStateToProps = ({ showInfo }) =>
  ({ showInfo });

const mapDispatchToProps = dispatch => {
  return {
    fetchShowInfo: showId => dispatch(fetchShowInfo(showId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
