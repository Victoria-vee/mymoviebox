import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    accept: "application/json",
  },
});

export async function getTrendingMovies() {
  const response = await tmdbApi.get("/trending/movie/week");

  return response.data;
}

export async function getNowPlayingMovies() {
    const response = await tmdbApi.get("/movie/now_playing");

    return response.data;
}
export async function searchMovies(query: string) {
    const response = await tmdbApi.get("/search/movie", {
        params: {
            query,
        },
    });

    return response.data;
}