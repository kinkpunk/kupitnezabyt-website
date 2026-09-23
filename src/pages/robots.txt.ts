import type { APIRoute } from 'astro';

const siteUrl = import.meta.env.PUBLIC_SITE_URL as string | undefined;
// Без PUBLIC_SITE_URL ссылка на sitemap относительная (см. README).
const sitemapUrl = siteUrl
  ? new URL('/sitemap.xml', siteUrl).toString()
  : '/sitemap.xml';

const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
