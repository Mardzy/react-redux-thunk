import { FETCH_EPISODES } from "../index";

export const episodesReducer = (state = [], action ) => {
  switch (action.type) {
    case FETCH_EPISODES:
      return action.payload;
    default:
      return state;
  }
};
