# Contributing to News Magazine

Thank you for your interest in contributing! This document provides guidelines and standards for contributing to this project.

## Code Quality Standards

### Prerequisites

- Node.js 20+
- npm
- Git

### Setup Development Environment

1. Clone the repository

```bash
git clone https://github.com/smithgh-ops/news-magazine.git
cd news-magazine
```

2. Install dependencies

```bash
npm install
```

3. Copy environment variables

```bash
cp .env.example .env
```

4. Start development server

```bash
npm run dev
```

## Code Quality Tools

### ESLint

We use ESLint with TypeScript and security plugins for code quality:

```bash
# Run linting
npm run lint

# Auto-fix issues
npm run lint:fix
```

### Prettier

Code formatting is enforced with Prettier:

```bash
# Check formatting
npm run format:check

# Format code
npm run format
```

### TypeScript

Type checking is mandatory:

```bash
npm run type-check
```

### Testing

All code should include tests:

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in UI mode
npm run test:ui
```

## Pre-commit Hooks

We use Husky and lint-staged for automated pre-commit checks:

- ESLint will run on all TypeScript and Astro files
- Prettier will format all changed files
- Failed checks will prevent commits

## Coding Standards

### TypeScript

- Use strict mode (already configured)
- Avoid `any` type - use proper typing
- Use interfaces for object shapes
- Export types for reusability
- Add JSDoc comments for public functions

Example:

```typescript
/**
 * Fetch article by slug
 * @param slug - Article slug identifier
 * @returns Article object or null if not found
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  // implementation
}
```

### Astro Components

- Use TypeScript in frontmatter
- Define prop interfaces
- Keep components focused and reusable
- Use semantic HTML
- Ensure accessibility (a11y)

Example:

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<div>
  <h1>{title}</h1>
  {description && <p>{description}</p>}
</div>
```

### Security

- Always sanitize user input
- Use provided utilities (`sanitizeHtml`, `sanitizeInput`, `sanitizeUrl`)
- Never use `dangerouslySetInnerHTML` equivalent
- Validate API parameters
- Don't commit secrets

Example:

```typescript
import { sanitizeHtml } from './lib/sanitize';

const safeContent = sanitizeHtml(article.content);
```

## Testing Guidelines

### Unit Tests

- Test utilities and functions
- Test edge cases and error conditions
- Aim for 80%+ coverage

Example:

```typescript
import { describe, it, expect } from 'vitest';
import { sanitizeInput } from './sanitize';

describe('sanitizeInput', () => {
  it('should remove HTML tags', () => {
    expect(sanitizeInput('<script>alert("xss")</script>')).toBe('');
  });
});
```

## Pull Request Process

1. **Create a feature branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow coding standards
   - Add tests
   - Update documentation

3. **Run quality checks**

   ```bash
   npm run quality:check
   npm run test:coverage
   ```

4. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

   Use conventional commit messages:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Formatting changes
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

5. **Push and create PR**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **PR Checklist**
   - [ ] All tests pass
   - [ ] Code is formatted with Prettier
   - [ ] No ESLint errors
   - [ ] TypeScript checks pass
   - [ ] Security audit passes
   - [ ] Documentation updated
   - [ ] Commit messages follow convention

## Architecture Guidelines

### File Structure

```
src/
├── components/     # Reusable Astro components
├── layouts/        # Page layouts
├── lib/           # Utilities and helpers
│   ├── api.ts     # API client
│   ├── types.ts   # TypeScript types
│   ├── sanitize.ts # Security utilities
│   └── security.ts # Security headers
├── pages/         # Routes (file-based routing)
└── styles/        # Global styles
```

### API Integration

- All API calls go through `src/lib/api.ts`
- Use provided types from `src/lib/types.ts`
- Validate and sanitize inputs
- Handle errors gracefully

### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Use custom theme colors from `tailwind.config.mjs`
- Ensure responsive design

### Accessibility

- Use semantic HTML
- Add ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain proper heading hierarchy

## CI/CD Pipeline

Our GitHub Actions workflow runs:

1. **Code Quality Check**
   - Prettier formatting
   - ESLint linting
   - TypeScript type checking
   - Test suite with coverage

2. **Security Audit**
   - npm audit for vulnerabilities
   - Snyk security scanning

3. **Build Check**
   - Production build verification

All checks must pass before merging.

## Getting Help

- Check existing issues and discussions
- Review documentation and code comments
- Ask questions in pull requests

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.
