// TypeScript interfaces for BePress API data models

export interface Author {
  id: string;
  name: string;
  bio?: string;
  email?: string;
  avatar?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  publishedAt: string;
  updatedAt?: string;
  author: Author;
  categories: Category[];
  tags: Tag[];
  views?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}
