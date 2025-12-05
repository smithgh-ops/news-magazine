// Mock data for development purposes
import type { Article, Category, Tag, Author, PaginatedResponse } from './types';

const mockAuthors: Author[] = [
  {
    id: '1',
    name: 'John Smith',
    bio: 'Senior Political Correspondent',
    email: 'john.smith@news1.com',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    bio: 'Technology Reporter',
    email: 'sarah.johnson@news1.com',
  },
  {
    id: '3',
    name: 'Michael Chen',
    bio: 'Business Editor',
    email: 'michael.chen@news1.com',
  },
];

const mockCategories: Category[] = [
  { id: '1', name: 'Politics', slug: 'politics', description: 'Political news and analysis' },
  { id: '2', name: 'Business', slug: 'business', description: 'Business and finance news' },
  { id: '3', name: 'Technology', slug: 'technology', description: 'Tech news and innovation' },
  { id: '4', name: 'Sports', slug: 'sports', description: 'Sports news and updates' },
  { id: '5', name: 'World', slug: 'world', description: 'International news' },
];

const mockTags: Tag[] = [
  { id: '1', name: 'Breaking News', slug: 'breaking-news' },
  { id: '2', name: 'Analysis', slug: 'analysis' },
  { id: '3', name: 'Opinion', slug: 'opinion' },
  { id: '4', name: 'Investigation', slug: 'investigation' },
];

const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Major Climate Agreement Reached at Global Summit',
    slug: 'climate-agreement-global-summit',
    excerpt: 'World leaders agree to ambitious new targets for carbon emissions reduction in landmark deal.',
    content: '<p>In a historic moment for global climate action, world leaders gathered at the International Climate Summit have reached a comprehensive agreement to accelerate efforts in combating climate change. The agreement, which took three weeks of intense negotiations, sets forth ambitious targets for reducing carbon emissions over the next decade.</p><p>The deal includes commitments from major economies to achieve net-zero emissions by 2050, with interim targets for 2030. Developing nations will receive financial support to transition to renewable energy sources.</p>',
    featuredImage: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-04T10:00:00Z',
    author: mockAuthors[0],
    categories: [mockCategories[4]],
    tags: [mockTags[0]],
    views: 15234,
  },
  {
    id: '2',
    title: 'Tech Giant Unveils Revolutionary AI System',
    slug: 'tech-giant-ai-system',
    excerpt: 'New artificial intelligence platform promises to transform how businesses operate with advanced automation.',
    content: '<p>A leading technology company has introduced its latest artificial intelligence system, marking a significant leap forward in machine learning capabilities. The new platform incorporates advanced neural networks and natural language processing to deliver unprecedented levels of automation.</p><p>Industry experts predict this could revolutionize sectors from healthcare to finance, enabling more efficient operations and better decision-making processes.</p>',
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-03T14:30:00Z',
    author: mockAuthors[1],
    categories: [mockCategories[2]],
    tags: [mockTags[0], mockTags[1]],
    views: 12890,
  },
  {
    id: '3',
    title: 'Stock Markets Rally on Positive Economic Data',
    slug: 'stock-markets-rally-economic-data',
    excerpt: 'Major indices hit record highs as investors respond to encouraging employment and inflation figures.',
    content: '<p>Financial markets surged to new heights today following the release of better-than-expected economic indicators. The Dow Jones Industrial Average, S&P 500, and Nasdaq Composite all closed at record levels.</p><p>Analysts attribute the rally to strong employment data and signs that inflation is moderating, reducing concerns about aggressive interest rate hikes.</p>',
    featuredImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-03T09:15:00Z',
    author: mockAuthors[2],
    categories: [mockCategories[1]],
    tags: [mockTags[1]],
    views: 9876,
  },
  {
    id: '4',
    title: 'Championship Final Set After Dramatic Semi-Finals',
    slug: 'championship-final-dramatic-semifinals',
    excerpt: 'Two teams advance to the final after thrilling matches that went down to the wire.',
    content: '<p>The stage is set for an epic championship final after two incredible semi-final matches. Both games featured dramatic comebacks and clutch performances from star players.</p><p>Fans are eagerly anticipating what promises to be a memorable final between these two powerhouse teams.</p>',
    featuredImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-02T20:45:00Z',
    author: mockAuthors[0],
    categories: [mockCategories[3]],
    tags: [mockTags[0]],
    views: 18456,
  },
  {
    id: '5',
    title: 'New Infrastructure Bill Passes Senate Vote',
    slug: 'infrastructure-bill-passes-senate',
    excerpt: 'Bipartisan legislation promises major investments in roads, bridges, and broadband internet.',
    content: '<p>The Senate has approved a sweeping infrastructure package that will allocate billions of dollars for upgrading the nation\'s transportation networks and expanding internet access.</p><p>The bill received support from both parties and is expected to create thousands of jobs while modernizing critical infrastructure.</p>',
    featuredImage: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-02T16:20:00Z',
    author: mockAuthors[0],
    categories: [mockCategories[0]],
    tags: [mockTags[1]],
    views: 11234,
  },
  {
    id: '6',
    title: 'Cybersecurity Threats Increase as Holidays Approach',
    slug: 'cybersecurity-threats-holiday-season',
    excerpt: 'Experts warn of rising phishing attacks and online scams targeting holiday shoppers.',
    content: '<p>Cybersecurity firms are reporting a significant uptick in malicious activity as the holiday shopping season begins. Phishing emails and fake websites designed to steal personal information have increased dramatically.</p><p>Consumers are advised to be vigilant when making online purchases and to verify the authenticity of websites before entering payment information.</p>',
    featuredImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=675&fit=crop',
    publishedAt: '2024-12-01T11:00:00Z',
    author: mockAuthors[1],
    categories: [mockCategories[2]],
    tags: [mockTags[3]],
    views: 8765,
  },
];

/**
 * Mock implementation of getLatestArticles
 */
export function getMockLatestArticles(
  page: number = 1,
  perPage: number = 10
): PaginatedResponse<Article> {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedArticles = mockArticles.slice(start, end);
  
  return {
    data: paginatedArticles,
    total: mockArticles.length,
    page,
    perPage,
    totalPages: Math.ceil(mockArticles.length / perPage),
  };
}

/**
 * Mock implementation of getArticleBySlug
 */
export function getMockArticleBySlug(slug: string): Article | null {
  return mockArticles.find(article => article.slug === slug) || null;
}

/**
 * Mock implementation of getArticlesByCategory
 */
export function getMockArticlesByCategory(
  category: string,
  page: number = 1,
  perPage: number = 10
): PaginatedResponse<Article> {
  const filtered = mockArticles.filter(article =>
    article.categories.some(cat => cat.slug === category)
  );
  
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedArticles = filtered.slice(start, end);
  
  return {
    data: paginatedArticles,
    total: filtered.length,
    page,
    perPage,
    totalPages: Math.ceil(filtered.length / perPage),
  };
}

/**
 * Mock implementation of getArticlesByTag
 */
export function getMockArticlesByTag(
  tag: string,
  page: number = 1,
  perPage: number = 10
): PaginatedResponse<Article> {
  const filtered = mockArticles.filter(article =>
    article.tags.some(t => t.slug === tag)
  );
  
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedArticles = filtered.slice(start, end);
  
  return {
    data: paginatedArticles,
    total: filtered.length,
    page,
    perPage,
    totalPages: Math.ceil(filtered.length / perPage),
  };
}

/**
 * Mock implementation of getCategories
 */
export function getMockCategories(): Category[] {
  return mockCategories;
}

/**
 * Mock implementation of getTags
 */
export function getMockTags(): Tag[] {
  return mockTags;
}
