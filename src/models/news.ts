export interface News {
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
}

export interface NewsResponse {
  status?: string;
  totalResults?: number;
  articles?: News[];
}
