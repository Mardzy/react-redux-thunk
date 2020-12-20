import {
  FETCH_SHOW_INFO_FAILED,
  FETCH_SHOW_INFO_PENDING,
  FETCH_SHOW_INFO_SUCCESS
} from "../../types";

/**
 * @type {{data: {}, loading: boolean, error: string|null}}
 */
const initialState = {
  loading: true,
  data: {},
  error: null
};

/**
 * @param {{data: {}, loading: boolean, error: (string|null)}} state
 * @param {{type: string, payload: {}}} action
 * @return {{data: {}, loading: boolean, error: {}}}
 */
export const showInfoReducer = (state = initialState, action ) => {
  console.log("type: ", action.type);
  switch (action.type) {
    case FETCH_SHOW_INFO_PENDING:
      console.log("reducer pending: ");
      return {
        loading: true,
        data: {},
        error: null
      };
    case FETCH_SHOW_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }
    case FETCH_SHOW_INFO_FAILED:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload
      }
    default:
      return state;
  }
};
