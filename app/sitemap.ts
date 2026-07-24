import { MetadataRoute } from 'next';
import { allPosts } from '@/data/posts';
import { getAllStories } from '@/data/stories';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maturidadeneurodivergente.com.br';

  const blogPosts = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const stories = getAllStories().map((story) => ({
    url: `${baseUrl}/stories/${story.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const routes = ['', '/blog', '/about', '/contact', '/privacy', '/terms', '/cookies', '/stories'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.6,
    })
  );

  return [...routes, ...blogPosts, ...stories];
}
