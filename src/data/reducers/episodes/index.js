import {
  FETCH_EPISODES_FAILED,
  FETCH_EPISODES_PENDING,
  FETCH_EPISODES_SUCCESS
} from "../../types";

/**
 *
 * @type {{data: [], loading: boolean, error: string|null}}
 */
const initialState = {
  loading: false,
  data: [],
  error: null
}

/**
 *
 * @param {{data: [], loading: boolean, error: (string|null)}} state
 * @param {{}} action
 * @return {{data: [], loading: boolean, error}|{data: {}, loading: boolean, error: (string|null)}|{data, loading:
 *   boolean, error: null}}
 */
export const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES_PENDING:
      return {
        ...state,
        loading: true
      }
    case FETCH_EPISODES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null
      }
    case FETCH_EPISODES_FAILED:
      return {
        loading: false,
        data: [],
        error: action.payload
      }
    default:
      return state;
  }
};
