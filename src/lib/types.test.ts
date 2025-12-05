import { describe, it, expect, vi } from 'vitest';
import type { Article } from './types';

// Mock the environment variables
vi.stubGlobal('import.meta', {
  env: {
    PUBLIC_API_BASE_URL: 'https://api.test.com',
    PUBLIC_TENANT_SLUG: 'test-tenant',
  },
});

describe('API Types', () => {
  it('should have correct Article interface structure', () => {
    const mockArticle: Article = {
      id: '1',
      title: 'Test Article',
      slug: 'test-article',
      excerpt: 'Test excerpt',
      content: 'Test content',
      publishedAt: '2024-01-01T00:00:00Z',
      author: {
        id: '1',
        name: 'Test Author',
      },
      categories: [],
      tags: [],
    };

    expect(mockArticle).toBeDefined();
    expect(mockArticle.id).toBe('1');
    expect(mockArticle.title).toBe('Test Article');
    expect(mockArticle.author.name).toBe('Test Author');
  });

  it('should allow optional fields in Article', () => {
    const mockArticle: Article = {
      id: '1',
      title: 'Test',
      slug: 'test',
      excerpt: 'Test',
      content: 'Test',
      publishedAt: '2024-01-01T00:00:00Z',
      featuredImage: 'https://example.com/image.jpg',
      updatedAt: '2024-01-02T00:00:00Z',
      views: 100,
      author: {
        id: '1',
        name: 'Test',
        bio: 'Test bio',
        email: 'test@example.com',
        avatar: 'https://example.com/avatar.jpg',
      },
      categories: [
        {
          id: '1',
          name: 'Test Category',
          slug: 'test-category',
          description: 'Test description',
        },
      ],
      tags: [
        {
          id: '1',
          name: 'Test Tag',
          slug: 'test-tag',
        },
      ],
    };

    expect(mockArticle.featuredImage).toBeDefined();
    expect(mockArticle.views).toBe(100);
    expect(mockArticle.author.bio).toBeDefined();
  });
});
