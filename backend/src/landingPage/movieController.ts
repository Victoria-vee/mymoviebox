import { Request, Response } from "express";
import { getTrendingMovies, getNowPlayingMovies,searchMovies } from "./tmdbService";

export const getTrending = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const movies = await getTrendingMovies();

    res.status(200).json(movies);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch trending movies",
    });
  }
};

export async function getNowPlaying(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const movies = await getNowPlayingMovies();

        res.status(200).json(movies);
    } catch (error) {
        console.error("Error fetching now playing movies:", error);

        res.status(500).json({
            message: "Failed to fetch now playing movies",
        });
    }
}

export async function searchMovie(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const query = req.query.query as string;

        if (!query || query.trim() === "") {
            res.status(400).json({
                message: "Search query is required",
            });
            return;
        }

        const movies = await searchMovies(query);

        res.status(200).json(movies);
    } catch (error) {
        console.error("Error searching movies:", error);

        res.status(500).json({
            message: "Failed to search movies",
        });
    }
}