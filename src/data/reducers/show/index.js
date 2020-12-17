import {
  FETCH_SHOW_INFO_FAILED,
  FETCH_SHOW_INFO_PENDING,
  FETCH_SHOW_INFO_SUCCESS
} from "../../types";

/**
 *
 * @type {{data: {}, loading: boolean, error: string|nullw}}
 */
const initialState = {
  loading: false,
  data: {},
  error: null
}

export const showInfoReducer = (state = initialState, action ) => {
  switch (action.type) {
    case FETCH_SHOW_INFO_PENDING:
      return {
        ...state,
        loading: true
      }
    case FETCH_SHOW_INFO_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null
      }
    case FETCH_SHOW_INFO_FAILED:
      return {
        loading: false,
        data: {},
        error: action.payload
      }
    default:
      return state;
  }
};
