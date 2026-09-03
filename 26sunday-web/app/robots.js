/**
 * robots.txt generation
 * @returns {import('next').MetadataRoute.Robots}
 */
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://26sunday.com/sitemap.xml',
    host: 'https://26sunday.com',
  };
}
