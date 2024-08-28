export interface Error {
  Response: boolean;
  Error: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface DetailedMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Error: string;
  Response: boolean;
}

export interface Rating {
  Source: string;
  Value: string;
}

export interface MovieListResponse {
  data: { Search: Movie[] };
}

export interface DetailedMovieResponse {
  data: DetailedMovie;
}
