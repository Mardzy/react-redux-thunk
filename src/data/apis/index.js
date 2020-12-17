import axios from "axios";

const tvMazeApi = "http://api.tvmaze.com";

export const tvMaze = axios.create({
  baseURL: tvMazeApi + "/shows"
});
