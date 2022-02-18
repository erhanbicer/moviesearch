import { useEffect, useState } from 'react';
import { DetailMovie } from '@services/APIService/DTOs';
import { APIService } from '@services/APIService';

export const useDetailFetch = (imdbID: string) => {
  const [detail, setDetail] = useState<DetailMovie | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    APIService.getInstance()
      .getDetail(imdbID)
      .then((res) => {
        setDetail(res.detail);
      })
      .catch((err) => setError(err.message));
  }, [imdbID]);

  return { detail, error };
};
