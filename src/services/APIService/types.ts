import { SearchMovie } from '@services/APIService/DTOs/SearchMovie';
import { DetailMovie } from '@services/APIService/DTOs/DetailMovie';

export declare namespace SearchApi {
  export interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }
  export interface SearchRawSuccessResponse {
    Search: Movie[];
    totalResults: string;
    Response: 'True';
  }
  export interface SearchRawErrorResponse {
    Response: 'False';
    Error: string;
  }
  export type SearchRawResponse =
    | SearchRawErrorResponse
    | SearchRawSuccessResponse;

  export interface SearchResponse {
    movies: SearchMovie[];
    count: string;
  }
}

export declare module DetailApi {
  export interface Rating {
    Source: string;
    Value: string;
  }

  export interface DetailRawSuccessResponse {
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
    Response: 'True';
  }

  export interface DetailRawErrorResponse {
    Response: 'False';
    Error: string;
  }

  export type DetailRawResponse =
    | DetailRawErrorResponse
    | DetailRawSuccessResponse;

  export interface DetailResponse {
    detail: DetailMovie;
  }
}
