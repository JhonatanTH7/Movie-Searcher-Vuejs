import type {
  MovieListResponse,
  DetailedMovieResponse,
} from "@/components/model/movie.model";
import type { Movie } from "@/model/movie.model";
import HTTP from "@/api/client-http";
import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
  state: () => ({
    listMovies: [] as Movie[],
    detailedMovie: {} as Movie,
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
        },
      });
      this.detailedMovie = response.data;
    },
  },
});
