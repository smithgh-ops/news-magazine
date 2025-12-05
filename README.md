# News Magazine

A modern, responsive news magazine website built with Astro.js and Tailwind CSS. Inspired by AP News design, this project provides a clean and professional interface for news content with **industrial-level code quality and security standards**.

![Homepage](https://github.com/user-attachments/assets/2bbc1ca6-66c6-4a11-acc4-9f5fda9bff42)

## ✨ Key Highlights

- 🔒 **Industrial-Level Security** - XSS protection, input sanitization, security headers
- ✅ **Code Quality Assurance** - ESLint, Prettier, TypeScript strict mode
- 🧪 **Testing Infrastructure** - Vitest with 80%+ coverage requirement
- 🚀 **CI/CD Pipeline** - Automated quality checks and security audits
- 📊 **Pre-commit Hooks** - Automated code validation before commits

## 🚀 Features

- **Static Site Generation (SSG)** - Fast, optimized static pages
- **Modern UI** - Clean, professional design inspired by AP News
- **Responsive Layout** - Mobile-first design that works on all devices
- **Category & Tag Filtering** - Browse articles by category or tag
- **SEO Optimized** - Built-in meta tags and OpenGraph support
- **TypeScript** - Type-safe code with strict mode enabled
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **XSS Protection** - HTML sanitization with DOMPurify
- **Input Validation** - All user inputs validated and sanitized
- **Security Headers** - CSP, HSTS, X-Frame-Options, etc.

## 🔒 Security & Quality Standards

### Security Measures

- ✅ **XSS Protection** - DOMPurify sanitization for all HTML content
- ✅ **Input Validation** - Sanitization utilities for all user inputs
- ✅ **Security Headers** - Comprehensive security headers (CSP, X-Frame-Options, etc.)
- ✅ **Dependency Scanning** - Automated npm audit in CI/CD
- ✅ **No Secrets** - Environment variables for all sensitive configuration
- ✅ **Type Safety** - TypeScript strict mode prevents runtime errors

### Code Quality Tools

- **ESLint** - Static code analysis with security and TypeScript plugins
- **Prettier** - Consistent code formatting
- **TypeScript** - Strict type checking
- **Vitest** - Unit and integration testing
- **Husky** - Pre-commit hooks for automated checks
- **lint-staged** - Run linters on staged files only

### Quality Metrics

- ✅ **Test Coverage**: 80%+ required for all code
- ✅ **Zero ESLint Errors**: All code must pass linting
- ✅ **Zero TypeScript Errors**: Strict type checking enforced
- ✅ **Zero Security Vulnerabilities**: npm audit must pass
- ✅ **Formatted Code**: Prettier formatting enforced

## 📸 Screenshots

### Homepage

![Homepage](https://github.com/user-attachments/assets/2bbc1ca6-66c6-4a11-acc4-9f5fda9bff42)

### Article Detail Page

![Article Detail](https://github.com/user-attachments/assets/a3955900-671c-4a77-90a4-898d38fbd2a4)

### Category Page

![Category Page](https://github.com/user-attachments/assets/85695a69-f918-498c-8e89-e2150421f420)

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/) v5+
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v3
- **Date Handling:** date-fns
- **Security:** DOMPurify, isomorphic-dompurify
- **Testing:** Vitest, @vitest/coverage-v8
- **Code Quality:** ESLint, Prettier, typescript-eslint
- **CI/CD:** GitHub Actions
- **Git Hooks:** Husky, lint-staged

## 📦 Project Structure

```
news-magazine/
├── .github/
│   └── workflows/
│       └── quality.yml         # CI/CD pipeline
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ArticleCard.astro    # Reusable article card component
│   │   ├── Footer.astro          # Site footer
│   │   └── Navbar.astro          # Navigation bar
│   ├── layouts/
│   │   └── Layout.astro          # Base layout with SEO meta tags
│   ├── lib/
│   │   ├── api.ts                # API utility functions
│   │   ├── api.test.ts           # API tests
│   │   ├── mockData.ts           # Mock data for development
│   │   ├── sanitize.ts           # Security sanitization utilities
│   │   ├── sanitize.test.ts      # Sanitization tests
│   │   ├── security.ts           # Security headers configuration
│   │   └── types.ts              # TypeScript interfaces
│   └── pages/
│       ├── index.astro           # Homepage
│       ├── articles/
│       │   └── [slug].astro      # Dynamic article detail page
│       ├── categories/
│       │   └── [category].astro  # Dynamic category listing page
│       └── tags/
│           └── [tag].astro       # Dynamic tag listing page
├── .husky/                       # Git hooks configuration
├── CONTRIBUTING.md               # Contribution guidelines
├── SECURITY.md                   # Security policy
├── eslint.config.mjs             # ESLint configuration
├── vitest.config.ts              # Vitest configuration
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/smithgh-ops/news-magazine.git
cd news-magazine
```

2. Install dependencies:

```bash
npm install
```

3. Copy the environment file:

```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:

```env
PUBLIC_API_BASE_URL=https://api.bepress.com
PUBLIC_TENANT_SLUG=news1
PUBLIC_SITE_NAME=News Magazine
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321/`

### Testing

Run tests:

```bash
# Run tests in watch mode
npm test

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

### Code Quality

Run quality checks:

```bash
# Format code
npm run format

# Check formatting
npm run format:check

# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Type check
npm run type-check

# Security audit
npm run security:audit

# Run all quality checks
npm run quality:check
```

### Build

Build the static site for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## 🔐 Security Best Practices

### Input Sanitization

Always use the sanitization utilities when handling dynamic content:

```typescript
import { sanitizeHtml, sanitizeInput, sanitizeUrl } from './lib/sanitize';

// Sanitize HTML content
const safeContent = sanitizeHtml(article.content);

// Sanitize text input
const safeInput = sanitizeInput(userInput, 200);

// Validate and sanitize URLs
const safeUrl = sanitizeUrl(link);
```

### Security Headers

Security headers are configured in `src/lib/security.ts` and include:

- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

### Environment Variables

Never commit secrets. Always use environment variables:

```typescript
const API_KEY = import.meta.env.SECRET_API_KEY;
```

## 🤖 CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/quality.yml`) runs on every push and PR:

1. **Code Quality Check**
   - Prettier formatting check
   - ESLint linting
   - TypeScript type checking
   - Test suite with coverage

2. **Security Audit**
   - npm audit for known vulnerabilities
   - Snyk security scanning (optional)

3. **Build Verification**
   - Production build test

All checks must pass before merging.

## 🔌 API Integration

The project is designed to work with the BePress Public API. The API utility layer (`src/lib/api.ts`) handles all data fetching with proper error handling and input validation.

### Available API Functions

```typescript
// Fetch latest articles
getLatestArticles(page?: number, perPage?: number)

// Fetch single article by slug
getArticleBySlug(slug: string)

// Fetch articles by category
getArticlesByCategory(category: string, page?: number, perPage?: number)

// Fetch articles by tag
getArticlesByTag(tag: string, page?: number, perPage?: number)

// Fetch all categories
getCategories()

// Fetch all tags
getTags()
```

All inputs are validated and sanitized before making API requests.

## 📝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Quick Contribution Checklist

- [ ] Code passes all quality checks (`npm run quality:check`)
- [ ] Tests are written and pass (`npm run test:coverage`)
- [ ] Code is formatted (`npm run format`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Security audit passes (`npm run security:audit`)
- [ ] Commit messages follow conventional commits
- [ ] Documentation is updated

## 🔒 Security Policy

Please see [SECURITY.md](SECURITY.md) for our security policy and how to report vulnerabilities.

## 🎨 Design Features

### Color Scheme

- **Primary Blue:** `#0066CC` - Used for links and brand elements
- **Accent Red:** `#D32F2F` - Used for breaking news and category badges
- **Secondary Gray:** `#333333` - Used for text and headers

### Typography

- **Sans Serif:** Inter - Used for body text and UI elements
- **Serif:** Merriweather - Used for headlines and article titles

## 🌐 Deployment

This is a static site that can be deployed to any static hosting service:

### Docker (Recommended for Production)

Deploy with Docker for better scalability and maintenance:

```bash
# Using Docker Compose
docker-compose up -d

# Or using Docker CLI
docker build -t news-magazine:latest .
docker run -d -p 80:80 news-magazine:latest
```

See [DOCKER.md](DOCKER.md) for complete Docker deployment guide.

### Other Hosting Options

- **Vercel:** `vercel --prod`
- **Netlify:** Connect your repository and deploy
- **GitHub Pages:** Build and deploy the `dist/` folder
- **Cloudflare Pages:** Connect repository for automatic deployments

## 🔒 Environment Variables

Required environment variables:

- `PUBLIC_API_BASE_URL` - Base URL for the BePress API
- `PUBLIC_TENANT_SLUG` - Tenant identifier for API requests
- `PUBLIC_SITE_NAME` - Display name for the website

Optional environment variables:

- `PUBLIC_API_KEY` - API authentication key (if your API requires it)

For Docker deployment, see [DOCKER.md](DOCKER.md) for environment configuration details.

## 📄 License

This project is licensed under the ISC License.

## 📧 Support

For questions or support, please open an issue on GitHub.

---

Built with ❤️ using [Astro](https://astro.build/) | Secured with 🔒 industrial-level standards
