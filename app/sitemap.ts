import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vibetonemusic.com';
  const lastModified = new Date();

  const routes = [
    { url: '', priority: 1, changefreq: 'weekly' as const },
    { url: '/about', priority: 0.9, changefreq: 'monthly' as const },
    { url: '/music', priority: 0.9, changefreq: 'weekly' as const },
    { url: '/videos', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/gallery', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/events', priority: 0.8, changefreq: 'weekly' as const },
    { url: '/merchandise', priority: 0.7, changefreq: 'monthly' as const },
    { url: '/news', priority: 0.8, changefreq: 'daily' as const },
    { url: '/fanzone', priority: 0.7, changefreq: 'monthly' as const },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' as const },
    { url: '/privacy', priority: 0.5, changefreq: 'yearly' as const },
    { url: '/terms', priority: 0.5, changefreq: 'yearly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changefreq,
    priority: route.priority,
  }));
}
