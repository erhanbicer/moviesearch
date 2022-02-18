import { useCallback, useEffect, useState } from 'react';
import { APIService, SearchMovie } from '@services/APIService';
import { getRandomMovie } from '@helpers';

let firstRender = true;
export const useMoviesFetch = () => {
  const [movies, setMovies] = useState<SearchMovie[] | undefined>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [errorText, setErrorText] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>();

  const fetchMovie = useCallback(
    async (name: string, page = '1') => {
      setLoading(true);

      try {
        const res = await APIService.getInstance().search(name, page);
        setMovies(res.movies);
        errorText && setErrorText(undefined);
      } catch (err) {
        setErrorText(err.message);
      } finally {
        setLoading(false);
      }
    },
    [errorText],
  );

  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      const randomMovieName = getRandomMovie();
      (async () => {
        await fetchMovie(randomMovieName);
      })();
    }
  }, [fetchMovie, movies]);

  return { movies, errorText, loading, searchTerm, setSearchTerm, fetchMovie };
};
