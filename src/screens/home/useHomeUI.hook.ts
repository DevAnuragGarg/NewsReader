import { useCallback, useEffect, useState } from 'react';
import { HomeScreenProps } from './props.type';
import { useNewsAPI } from '../../hooks/useNewsAPI.hook';
import { useStorage } from '../../hooks/useStorage.hook';
import { News } from '../../models/news';

export const useHomeUI = (props: HomeScreenProps) => {
  const {} = props;

  const [pageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<News[]>([]);
  const [hasNoMore, setHasNoMore] = useState<boolean>(false);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const { storeData, getData, clearData } = useStorage();
  const { error: apiError, fetchNews } = useNewsAPI();

  const fetchArticles = useCallback(async () => {
    console.log('Fetching articles...');
    try {
      setLoading(true);
      setError(null);

      // first check the cache with the key
      if (!isRefreshing) {
        const cachedArticles = await getData(pageNumber, pageSize);

        if (cachedArticles) {
          console.log(`📦 Cache hit: page ${pageNumber}`);
          setArticles(cachedArticles);
          setError(null);
          return;
        }
      } else {
        // as it is force refresh clear the cache
        console.log(`📦 Cache miss: Clearing old data`);
        await clearData();
        setArticles([]);
      }

      // fetch news from API
      console.log(`🌐 Fetching from API: page ${pageNumber}, size ${pageSize}`);
      const news = await fetchNews(pageNumber, pageSize);

      if (news) {
        console.log(`Articles from API received: ${news.length} articles`);

        // need to check if we are getting more articles
        if (news.length === 0) {
          console.log(`No new articles found`);
          setHasNoMore(true);
        } else {
          // if the user has refreshed it or data is stale
          if (hasNoMore) {
            setHasNoMore(false);
          }
          await storeData(pageNumber, pageSize, news);

          if (isRefreshing || pageNumber === 1) {
            console.log(`First time setting articles: ${news.length} articles`);
            setArticles(news);
          } else {
            // Load more - append to existing
            console.log(
              `Loading more articles and appending: ${news.length} articles`,
            );
            setArticles(prev => [...prev, ...news]);
          }
        }
      } else {
        throw new Error(apiError || 'Failed to fetch news');
      }
    } catch (e) {
      console.error('❌ Error fetching news', e);
      setError(apiError || 'Failed to fetch news');
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  }, [
    pageNumber,
    apiError,
    pageSize,
    clearData,
    fetchNews,
    getData,
    storeData,
    hasNoMore,
    isRefreshing,
  ]);

  const loadMore = useCallback(() => {
    if (!loading && !hasNoMore) {
      console.log('Loading more articles...');
      setPageNumber(prev => prev + 1);
    }
  }, [loading, hasNoMore]);

  const onRefresh = useCallback(() => {
    console.log('Refreshing articles...');
    setIsRefreshing(true);
    setPageNumber(1);
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles, pageNumber]);

  return {
    articles,
    loading,
    error,
    loadMore,
    hasNoMore,
    onRefresh,
    isRefreshing,
  };
};
