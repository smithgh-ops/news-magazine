import { describe, it, expect } from 'vitest';
import { sanitizeHtml, sanitizeUrl, sanitizeInput } from './sanitize';

describe('sanitizeHtml', () => {
  it('should allow safe HTML tags', () => {
    const input = '<p>Hello <strong>World</strong></p>';
    const result = sanitizeHtml(input);
    expect(result).toBe('<p>Hello <strong>World</strong></p>');
  });

  it('should remove script tags', () => {
    const input = '<p>Hello</p><script>alert("XSS")</script>';
    const result = sanitizeHtml(input);
    expect(result).not.toContain('<script>');
    expect(result).toContain('<p>Hello</p>');
  });

  it('should remove event handlers', () => {
    const input = '<p onclick="alert(\'XSS\')">Click me</p>';
    const result = sanitizeHtml(input);
    expect(result).not.toContain('onclick');
  });

  it('should sanitize dangerous URLs in links', () => {
    const input = '<a href="javascript:alert(\'XSS\')">Click</a>';
    const result = sanitizeHtml(input);
    expect(result).not.toContain('javascript:');
  });

  it('should preserve allowed attributes', () => {
    const input = '<a href="https://example.com" target="_blank" rel="noopener">Link</a>';
    const result = sanitizeHtml(input);
    expect(result).toContain('href="https://example.com"');
    expect(result).toContain('target="_blank"');
  });
});

describe('sanitizeUrl', () => {
  it('should allow valid HTTPS URLs', () => {
    const input = 'https://example.com/path';
    const result = sanitizeUrl(input);
    expect(result).toBe('https://example.com/path');
  });

  it('should allow valid HTTP URLs', () => {
    const input = 'http://example.com';
    const result = sanitizeUrl(input);
    expect(result).toBe('http://example.com');
  });

  it('should reject javascript: URLs', () => {
    const input = 'javascript:alert("XSS")';
    const result = sanitizeUrl(input);
    expect(result).toBe('');
  });

  it('should reject data: URLs', () => {
    const input = 'data:text/html,<script>alert("XSS")</script>';
    const result = sanitizeUrl(input);
    expect(result).toBe('');
  });

  it('should handle invalid URLs', () => {
    const input = 'not a valid url';
    const result = sanitizeUrl(input);
    expect(result).toBe('');
  });
});

describe('sanitizeInput', () => {
  it('should remove HTML tags', () => {
    const input = '<p>Hello</p><b>World</b>';
    const result = sanitizeInput(input);
    expect(result).toBe('HelloWorld');
  });

  it('should trim whitespace', () => {
    const input = '  Hello World  ';
    const result = sanitizeInput(input);
    expect(result).toBe('Hello World');
  });

  it('should limit length', () => {
    const input = 'a'.repeat(2000);
    const result = sanitizeInput(input, 100);
    expect(result.length).toBe(100);
  });

  it('should handle non-string input', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
    const result = sanitizeInput(null as any);
    expect(result).toBe('');
  });

  it('should preserve safe text', () => {
    const input = 'Hello World 123';
    const result = sanitizeInput(input);
    expect(result).toBe('Hello World 123');
  });
});
