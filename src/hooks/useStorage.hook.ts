import AsyncStorage from '@react-native-async-storage/async-storage';
import { News } from '../models/news';
import { useCallback } from 'react';

const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

export const useStorage = () => {
  const storeData = useCallback(
    async (pageNumber: number, pageSize: number, articles: News[]) => {
      const cacheKey = `articles_${pageNumber}_${pageSize}`;
      const cacheData = {
        articles,
        timestamp: Date.now(),
      };
      try {
        await AsyncStorage.setItem(cacheKey, JSON.stringify(cacheData));
      } catch (error) {
        console.error('Error saving articles:', error);
      }
    },
    [],
  );

  const getData = useCallback(async (pageNumber: number, pageSize: number) => {
    const cacheKey = `articles_${pageNumber}_${pageSize}`;
    try {
      const cached = await AsyncStorage.getItem(cacheKey);
      if (!cached) return null;
      const { articles, timestamp } = JSON.parse(cached);

      // Check if cache is expired
      if (Date.now() - timestamp > CACHE_DURATION) {
        console.log('⏰ Cache expired');
        return null;
      }
      return articles;
    } catch (error) {
      console.error('Error retrieving articles:', error);
      return null;
    }
  }, []);

  const clearData = useCallback(async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing articles:', error);
    }
  }, []);

  return { storeData, getData, clearData };
};
