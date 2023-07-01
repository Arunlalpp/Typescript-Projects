export interface HomeData {
  cover: string;
  date: string;
  desc: string;
  genres: string;
  id: number;
  name: string;
  rating: number;
  starring: string;
  tags: string;
  time: string;
  video: string;
}

export interface UpcomingData {
  cover: string;
  id: number;
  name: string;
  time: string;
}

export interface Latest {
  cover: string;
  id: number;
  name: string;
  time: string;
}

export interface TrendingData {
  cover: string;
  date: string;
  desc: string;
  genres: string;
  id: number;
  name: string;
  rating: number;
  starring: string;
  tags: string;
  time: string;
  video: string;
}

export interface RecommendedData {
  cover: string;
  id: number;
  name: string;
  time: string;
}

export interface FooterData {
  list: string[];
  description: string;
}

export interface DashboardData {
  footerData: FooterData;
  homeData: HomeData[];
  latest: Latest[];
  links: string[];
  recommendedData: RecommendedData[];
  title: string;
  title2: string;
  trendingData: TrendingData[];
  upcomingData: UpcomingData[];
}
