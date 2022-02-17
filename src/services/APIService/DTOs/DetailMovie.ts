import { DetailApi } from '@services/APIService/types';

export class DetailMovie {
  constructor() {}

  static from(details: DetailApi.DetailRawSuccessResponse) {
    const instance = new DetailMovie();

    instance.actors = details.Actors;
    instance.awards = details.Awards;
    instance.boxOffice = details.BoxOffice;
    instance.country = details.Country;
    instance.dvd = details.DVD;
    instance.director = details.Director;
    instance.genre = details.Genre;
    instance.language = details.Language;
    instance.metascore = details.Metascore;
    instance.plot = details.Plot;
    instance.poster = details.Poster;
    instance.production = details.Production;
    instance.rated = details.Rated;
    instance.ratings = details.Ratings;
    instance.released = details.Released;
    instance.runtime = details.Runtime;
    instance.title = details.Title;
    instance.type = details.Type;
    instance.website = details.Website;
    instance.writer = details.Writer;
    instance.year = details.Year;
    instance.imdbID = details.imdbID;
    instance.imdbRating = details.imdbRating;
    instance.imdbVotes = details.imdbVotes;

    return instance;
  }

  actors!: string;
  awards!: string;
  boxOffice!: string;
  country!: string;
  dvd!: string;
  director!: string;
  genre!: string;
  language!: string;
  metascore!: string;
  plot!: string;
  poster!: string;
  production!: string;
  rated!: string;
  ratings!: DetailApi.Rating[];
  released!: string;
  runtime!: string;
  title!: string;
  type!: string;
  website!: string;
  writer!: string;
  year!: string;
  imdbID!: string;
  imdbRating!: string;
  imdbVotes!: string;
}
