/**
 * Security Headers Configuration
 * Implements OWASP recommended security headers
 */

export const SECURITY_HEADERS = {
  // Content Security Policy - Prevents XSS and other injection attacks
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Note: Adjust based on actual needs
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: https:",
    "font-src 'self' data:",
    "connect-src 'self' https:",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; '),

  // Prevents clickjacking attacks
  'X-Frame-Options': 'DENY',

  // Prevents MIME type sniffing
  'X-Content-Type-Options': 'nosniff',

  // Enables XSS filter in browsers
  'X-XSS-Protection': '1; mode=block',

  // Controls referrer information
  'Referrer-Policy': 'strict-origin-when-cross-origin',

  // Prevents information leakage
  'X-Powered-By': '',

  // Requires HTTPS (for production)
  // 'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',

  // Permissions Policy - Controls browser features
  'Permissions-Policy': [
    'accelerometer=()',
    'camera=()',
    'geolocation=()',
    'gyroscope=()',
    'magnetometer=()',
    'microphone=()',
    'payment=()',
    'usb=()',
  ].join(', '),
};

/**
 * Get all security headers as an object
 */
export function getSecurityHeaders(): Record<string, string> {
  return { ...SECURITY_HEADERS };
}

/**
 * Rate limiting configuration (for reference)
 */
export const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
};
