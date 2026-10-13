import type { MetadataRoute } from 'next';
import { locations } from '@/data/locations';
import { products } from '@/data/products';
import { absolute } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' = 'monthly') => ({
    url: absolute(path),
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page('/', 1, 'weekly'),
    page('/products', 0.9, 'weekly'),
    page('/wholesale', 0.9),
    page('/diamond-core-bit', 0.9),
    page('/about', 0.6),
    page('/contact', 0.7),
    ...products.map((p) => page(`/products/${p.slug}`, p.category === 'core-bits' ? 0.85 : 0.6)),
    ...locations.map((l) => page(`/diamond-core-bit/${l.slug}`, 0.8)),
  ];
}
