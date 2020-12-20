import { tvMaze } from "../axios";
import {
  FETCH_SHOW_INFO_FAILED,
  FETCH_SHOW_INFO_PENDING,
  FETCH_SHOW_INFO_SUCCESS
} from "../types";

export const fetchShowInfoPending = {
  type: FETCH_SHOW_INFO_PENDING
}

export const fetchShowInfoSuccess = payload =>
  ({ type: FETCH_SHOW_INFO_SUCCESS, payload })

export const fetchShowInfoFailed = payload =>
  ({ type: FETCH_SHOW_INFO_FAILED, payload })

export const fetchShowInfo = showId =>
  async dispatch => {
    const path = `/shows/${showId}`
    try {
    dispatch(fetchShowInfoPending);
      const { data } = await tvMaze.get(path);

      dispatch(fetchShowInfoSuccess(data));
    } catch ({ message }) {
      dispatch(fetchShowInfoFailed(message));
    }
  };

