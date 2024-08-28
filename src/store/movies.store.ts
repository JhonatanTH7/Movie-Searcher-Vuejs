import type {
  Movie,
  MovieListResponse,
  DetailedMovie,
  DetailedMovieResponse,
} from "@/components/model/movie.model";
import HTTP from "@/api/client-http";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    listMovies: [] as Movie[],
    detailedMovie: {} as DetailedMovie,
  }),
  actions: {
    async getMovies(search: string = "movies") {
      const response: MovieListResponse = await HTTP.get("", {
        params: {
          s: search,
        },
      });
      this.listMovies = response.data.Search;
    },
    async getDetailedMovie(id: string) {
      const response: DetailedMovieResponse = await HTTP.get("", {
        params: {
          i: id,
          plot: "full",
        },
      });
      this.detailedMovie = response.data;
    },
  },
});
