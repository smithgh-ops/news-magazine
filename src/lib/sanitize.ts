import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param dirty - The HTML string to sanitize
 * @returns Sanitized HTML string safe for rendering
 */
export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      'p',
      'br',
      'strong',
      'em',
      'u',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'ul',
      'ol',
      'li',
      'blockquote',
      'a',
      'img',
      'code',
      'pre',
      'span',
      'div',
    ],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'id', 'target', 'rel'],
    ALLOW_DATA_ATTR: false,
    ALLOWED_URI_REGEXP:
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i,
  });
}

/**
 * Sanitize and validate URL to prevent injection attacks
 * @param url - The URL to validate
 * @returns Sanitized URL or empty string if invalid
 */
export function sanitizeUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);
    // Only allow http and https protocols
    if (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:') {
      return DOMPurify.sanitize(url);
    }
    return '';
  } catch {
    return '';
  }
}

/**
 * Validate and sanitize input strings
 * @param input - String to sanitize
 * @param maxLength - Maximum allowed length
 * @returns Sanitized string
 */
export function sanitizeInput(input: string, maxLength = 1000): string {
  if (typeof input !== 'string') {
    return '';
  }

  // Remove any HTML tags
  const withoutHtml = input.replace(/<[^>]*>/g, '');

  // Trim and limit length
  return withoutHtml.trim().slice(0, maxLength);
}
