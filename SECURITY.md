# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability in this project, please report it by emailing the security team. Do not create public GitHub issues for security vulnerabilities.

## Security Measures Implemented

### 1. Input Validation & Sanitization

- All user inputs are sanitized using DOMPurify
- URL parameters are validated and encoded
- Pagination parameters are validated for type and range
- Maximum length constraints on input fields

### 2. XSS (Cross-Site Scripting) Protection

- HTML content is sanitized before rendering
- Strict Content Security Policy headers
- No inline event handlers
- Safe HTML tags whitelist
- URL validation to prevent javascript: and data: protocol attacks

### 3. Security Headers

The following security headers are configured:

- **Content-Security-Policy**: Prevents XSS and injection attacks
- **X-Frame-Options**: Prevents clickjacking (set to DENY)
- **X-Content-Type-Options**: Prevents MIME sniffing (nosniff)
- **X-XSS-Protection**: Browser XSS filter enabled
- **Referrer-Policy**: Controls referrer information leakage
- **Permissions-Policy**: Restricts browser features

### 4. Dependency Security

- Regular `npm audit` checks
- Automated security scanning via Snyk (in CI/CD)
- No known vulnerabilities in dependencies
- Keep dependencies up to date

### 5. Code Quality

- ESLint with security plugin for static code analysis
- TypeScript strict mode for type safety
- Prettier for consistent code formatting
- Pre-commit hooks for automated checks

### 6. API Security

- No authentication credentials in frontend code
- Environment variables for sensitive configuration
- Input validation on all API parameters
- Proper error handling without information leakage

### 7. Build & Deployment

- Static site generation for reduced attack surface
- No server-side code execution
- Build-time validation and checks
- Automated CI/CD pipeline with security gates

## Best Practices for Contributors

1. **Never commit secrets** - Use environment variables
2. **Validate all inputs** - Use provided sanitization utilities
3. **Escape HTML content** - Use sanitizeHtml() for dynamic content
4. **Run security checks** - Execute `npm run security:audit` before committing
5. **Keep dependencies updated** - Regularly check for updates
6. **Follow TypeScript strict mode** - Don't use `any` type
7. **Write tests** - Include security test cases

## Security Checklist for Pull Requests

- [ ] No hardcoded secrets or credentials
- [ ] All user inputs are validated and sanitized
- [ ] No `dangerouslySetInnerHTML` or equivalent
- [ ] Dependencies are up to date
- [ ] Tests include security scenarios
- [ ] ESLint security warnings are addressed
- [ ] npm audit passes without high/critical issues

## Automated Security Tools

- **ESLint Security Plugin**: Detects common security issues
- **npm audit**: Checks for known vulnerabilities in dependencies
- **Snyk**: Continuous security monitoring
- **TypeScript**: Type safety to prevent runtime errors
- **Husky**: Pre-commit hooks for automated checks

## Known Limitations

- Content from BePress API is trusted (should be validated server-side)
- Client-side security only (no server-side validation)
- CSP policy allows 'unsafe-inline' for styles (required by Astro/Tailwind)

## Security Updates

This section will be updated as new security measures are implemented or vulnerabilities are discovered and fixed.

Last Updated: 2024-12-05
