import { axiosClient } from './axiosClient';
import { NewsResponse } from '../models/news';

export const getTopNews = async (page: number = 1, pageSize: number = 10) => {
  const res = await axiosClient.get<NewsResponse>('/top-headlines', {
    params: {
      page,
      pageSize,
    },
  });
  return res.data;
};
