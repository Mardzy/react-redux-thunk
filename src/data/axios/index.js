import axios from "axios";

export const tvMazeApi = "http://api.tvmaze.com/shows/";

/**
 * @type {AxiosInstance}
 */
export const tvMazeShows = axios.create({
  baseURL: tvMazeApi
});

/**
 * @param {string} baseURL
 * @return {AxiosInstance}
 */
export const tvMazeEpisode = baseURL => axios.get(baseURL);
