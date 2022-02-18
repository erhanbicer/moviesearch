import axios from 'axios';
import { DetailApi, SearchApi } from './types';
import { SearchMovie } from '@services/APIService/DTOs/SearchMovie';
import { DetailMovie } from '@services/APIService/DTOs/DetailMovie';

export class APIService {
  private static instance: APIService;
  private axios = axios;

  private constructor() {}

  static getInstance() {
    if (!APIService.instance) {
      APIService.instance = new APIService();
    }

    return APIService.instance;
  }

  static initialize(remoteConfig: any) {
    const instance = APIService.getInstance();
    const baseURL = remoteConfig.getStringValue('BASE_URL');
    const apiKey = remoteConfig.getStringValue('OMDB_API_KEY');

    instance.axios.defaults.baseURL = baseURL;

    instance.axios.interceptors.request.use(
      (config) => {
        config.params.apikey = apiKey;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    return instance;
  }

  public async search(
    name: string,
    page = '1',
  ): Promise<SearchApi.SearchResponse> {
    const { data } = await this.axios.get<SearchApi.SearchRawResponse>('', {
      params: {
        s: name,
        type: 'movie',
        page,
      },
    });

    if (data.Response === 'False') {
      throw new Error('Film bulunamadı');
    }

    return {
      movies: data.Search.map(SearchMovie.from),
      count: data.totalResults,
    };
  }

  public async getDetail(imdbID: string): Promise<DetailApi.DetailResponse> {
    const { data } = await this.axios.get<DetailApi.DetailRawResponse>('', {
      params: {
        i: imdbID,
      },
    });

    if (data.Response === 'False') {
      throw new Error('Film bulunamadı');
    }

    return { detail: DetailMovie.from(data) };
  }
}
