import axios from "axios";

const tvMazeApi = "http://api.tvmaze.com/shows";

export const tvMaze = axios.create({
  baseURL: tvMazeApi
});
