import { Router } from "express";
import { getTrending, getNowPlaying,searchMovie } from "./movieController";

const router = Router();

router.get("/trending", getTrending);

router.get("/now-playing", getNowPlaying);

router.get("/search", searchMovie);
export default router;