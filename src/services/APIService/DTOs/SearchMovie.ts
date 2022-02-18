import { SearchApi } from '@services/APIService/types';
import { validateImageURL } from '@utils/validateImageURL';

export class SearchMovie {
  constructor() {}

  static from({ Poster, imdbID, Title, Type, Year }: SearchApi.Movie) {
    const instance = new SearchMovie();

    instance.imdbID = imdbID;
    instance.poster = validateImageURL(Poster);
    instance.title = Title;
    instance.type = Type;
    instance.year = Year;

    return instance;
  }

  poster!: string;
  title!: string;
  type!: string;
  year!: string;
  imdbID!: string;
}
