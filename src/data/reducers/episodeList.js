import {
  FETCH_EPISODE_LIST_FAILED,
  FETCH_EPISODE_LIST_PENDING,
  FETCH_EPISODE_LIST_SUCCESS
} from "../types";

/**
 * @type {{data: [], loading: boolean, error: string|null}}
 */
const initialState = {
  loading: false,
  data: [],
  error: null
}

/**
 * @param {{data: [], loading: boolean, error: (string|null)}} state
 * @param {{type: string, payload: []}} action
 * @return {{data: [], loading: boolean, error}|{data: {}, loading: boolean, error:
 *   (string|null)}|{data, loading: boolean, error: null}}
 */
export const episodeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODE_LIST_PENDING:
      return {
        ...state,
        loading: true
      }
    case FETCH_EPISODE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }
    case FETCH_EPISODE_LIST_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload
      }
    default:
      return state;
  }
};
