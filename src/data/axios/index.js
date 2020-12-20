import axios from "axios";

export const tvMazeApi = "http://api.tvmaze.com";

export const tvMaze = axios.create({
  baseURL: tvMazeApi
});
