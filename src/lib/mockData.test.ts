import { describe, it, expect } from 'vitest';
import { getMockPopularArticles } from './mockData';

describe('mockData', () => {
  describe('getMockPopularArticles', () => {
    it('should return articles sorted by views in descending order', () => {
      const popularArticles = getMockPopularArticles(5);

      expect(popularArticles).toHaveLength(5);

      // Verify that articles are sorted by views (descending)
      for (let i = 0; i < popularArticles.length - 1; i++) {
        const currentViews = popularArticles[i].views || 0;
        const nextViews = popularArticles[i + 1].views || 0;
        expect(currentViews).toBeGreaterThanOrEqual(nextViews);
      }
    });

    it('should limit the number of articles returned', () => {
      const popularArticles = getMockPopularArticles(3);
      expect(popularArticles).toHaveLength(3);
    });

    it('should return all articles if limit exceeds total count', () => {
      const popularArticles = getMockPopularArticles(1000);
      expect(popularArticles.length).toBeGreaterThan(0);
    });

    it('should have the highest viewed article first', () => {
      const popularArticles = getMockPopularArticles(5);
      const firstArticle = popularArticles[0];

      // Verify all other articles have equal or fewer views
      popularArticles.forEach((article) => {
        expect(firstArticle.views || 0).toBeGreaterThanOrEqual(article.views || 0);
      });
    });
  });
});
