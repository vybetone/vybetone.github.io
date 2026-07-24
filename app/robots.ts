import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api/admin'],
    },
    sitemap: 'https://vibetonemusic.com/sitemap.xml',
    host: 'https://vibetonemusic.com',
  };
}
