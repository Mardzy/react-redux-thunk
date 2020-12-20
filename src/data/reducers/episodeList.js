import _ from "lodash";
import {
  FETCH_EPISODE_LIST_FAILED,
  FETCH_EPISODE_LIST_PENDING,
  FETCH_EPISODE_LIST_SUCCESS
} from "../types";

/**
 * @type {{data: {}, loading: boolean, error: string|null}}
 */
const initialState = {
  loading: true,
  data: {},
  error: null
}

const groupEpisodesBySeasons = episodes => {
  return _.groupBy(episodes, "season")

}

/**
 * @param {{data: {}, loading: boolean, error: (string|null)}} state
 * @param {{type: string, payload: {}}} action
 * @return {{data: {}, loading: boolean, error}|{data: {}, loading: boolean, error:
 *   (string|null)}|{data, loading: boolean, error: null}}
 */
export const episodeListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_EPISODE_LIST_PENDING:
      return {
        ...state,
        loading: true
      }
    case FETCH_EPISODE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: groupEpisodesBySeasons(payload),
        error: null
      }
    case FETCH_EPISODE_LIST_FAILED:
      return {
        loading: false,
        data: [],
        error: payload
      }
    default:
      return state;
  }
};
