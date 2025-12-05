// API utility for BePress Public API
import type { Article, Category, Tag, PaginatedResponse } from './types';

const API_BASE = import.meta.env.PUBLIC_API_BASE_URL;
const TENANT_SLUG = import.meta.env.PUBLIC_TENANT_SLUG;

/**
 * Base fetch wrapper with required headers for BePress API
 */
async function apiFetch<T>(endpoint: string): Promise<T> {
  const url = `${API_BASE}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'x-tenant-slug': TENANT_SLUG,
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 404) {
      throw new Error('Resource not found');
    }

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API Error for ${url}:`, error);
    throw error;
  }
}

/**
 * Fetch latest articles with pagination
 */
export async function getLatestArticles(
  page: number = 1,
  perPage: number = 10
): Promise<PaginatedResponse<Article>> {
  return apiFetch<PaginatedResponse<Article>>(
    `/public/v1/articles?page=${page}&per_page=${perPage}`
  );
}

/**
 * Fetch a single article by slug
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    return await apiFetch<Article>(`/public/v1/articles/${slug}`);
  } catch (error) {
    if (error instanceof Error && error.message.includes('not found')) {
      return null;
    }
    throw error;
  }
}

/**
 * Fetch articles by category
 */
export async function getArticlesByCategory(
  category: string,
  page: number = 1,
  perPage: number = 10
): Promise<PaginatedResponse<Article>> {
  return apiFetch<PaginatedResponse<Article>>(
    `/public/v1/categories/${category}/articles?page=${page}&per_page=${perPage}`
  );
}

/**
 * Fetch articles by tag
 */
export async function getArticlesByTag(
  tag: string,
  page: number = 1,
  perPage: number = 10
): Promise<PaginatedResponse<Article>> {
  return apiFetch<PaginatedResponse<Article>>(
    `/public/v1/tags/${tag}/articles?page=${page}&per_page=${perPage}`
  );
}

/**
 * Fetch all categories
 */
export async function getCategories(): Promise<Category[]> {
  const response = await apiFetch<{ data: Category[] }>('/public/v1/categories');
  return response.data;
}

/**
 * Fetch all tags
 */
export async function getTags(): Promise<Tag[]> {
  const response = await apiFetch<{ data: Tag[] }>('/public/v1/tags');
  return response.data;
}
