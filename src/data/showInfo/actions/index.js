import { tvMaze } from "../../apis";

export const FETCH_SHOW_INFO = "FETCH_SHOW_INFO";

const fetchShowInfoFailure = error =>
  ({
    type:
  })

export const fetchShowInfo = url => async dispatch => {
  const response = await tvMaze.get(url);

  dispatch({ type: FETCH_SHOW_INFO, payload: response });
};
