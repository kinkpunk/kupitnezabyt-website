import type { APIRoute } from 'astro';

interface SitemapEntry {
  path: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: string;
}

const pages: SitemapEntry[] = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/install', changefreq: 'monthly', priority: '0.8' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
];

const siteUrl = import.meta.env.PUBLIC_SITE_URL as string | undefined;
// Без PUBLIC_SITE_URL loc остаётся корневым относительным путем (см. README).
const toLoc = (path: string) =>
  siteUrl ? new URL(path, siteUrl).toString() : path;

const lastmod = new Date().toISOString().slice(0, 10);

const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${toLoc(page.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
