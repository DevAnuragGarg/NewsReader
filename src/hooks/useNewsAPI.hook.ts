import { useState, useCallback } from 'react';
import { News } from '../models/news';
import { getTopNews } from '../api/newsAPI';

export const useNewsAPI = () => {
  const [response, setResponse] = useState<News[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = useCallback(async (page: number, pageSize: number) => {
    setLoading(true);
    setError(null);

    try {
      const newsResponse = await getTopNews(page, pageSize);
      if (newsResponse.status === 'ok') {
        setResponse(newsResponse.articles ? newsResponse.articles : []);
        return newsResponse.articles;
      } else {
        setError(newsResponse.status || 'Failed to fetch news');
        return null;
      }
    } catch (err: any) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong');
      }
      setResponse(null);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { response, loading, error, fetchNews };
};
